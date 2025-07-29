import { useState } from 'react';
import {
  PlusIcon,
  CheckIcon,
  ClockIcon,
  TrashIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Tasks() {
  const [newTask, setNewTask] = useState('');
  const [assignee, setAssignee] = useState('moi');
  const [priority, setPriority] = useState('moyenne');
  const [filter, setFilter] = useState('toutes');

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Retoucher les photos de Marie Lambert',
      client: 'Marie Lambert',
      assignee: 'moi',
      dueDate: '15 Juin 2023',
      priority: 'haute',
      completed: false,
      session: 'Famille - 10 Juin 2023',
    },
    {
      id: 2,
      title: 'Envoyer la galerie à Thomas Dubois',
      client: 'Thomas Dubois',
      assignee: 'assistant',
      dueDate: '12 Juin 2023',
      priority: 'moyenne',
      completed: true,
      session: 'Pro - 5 Juin 2023',
    },
    {
      id: 3,
      title: 'Préparer le contrat pour Sophie Martin',
      client: 'Sophie Martin',
      assignee: 'moi',
      dueDate: '10 Juin 2023',
      priority: 'haute',
      completed: false,
      session: 'Bébé - 1 Juin 2023',
    },
    {
      id: 4,
      title: 'Nettoyer le studio après séance couple',
      client: 'Lucas Bernard',
      assignee: 'assistant',
      dueDate: '30 Mai 2023',
      priority: 'basse',
      completed: true,
      session: 'Couple - 28 Mai 2023',
    },
    {
      id: 5,
      title: 'Créer album photo pour Emma Petit',
      client: 'Emma Petit',
      assignee: 'moi',
      dueDate: '20 Juin 2023',
      priority: 'moyenne',
      completed: false,
      session: 'Portrait - 25 Mai 2023',
    },
  ]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'toutes') return true;
    if (filter === 'complétées') return task.completed;
    if (filter === 'en cours') return !task.completed;
    if (filter === 'haute') return task.priority === 'haute';
    return true;
  });

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
      client: 'Nouveau client',
      assignee: assignee,
      dueDate: 'Date à définir',
      priority: priority,
      completed: false,
      session: 'Séance à définir',
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'haute':
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
            Haute
          </Badge>
        );
      case 'moyenne':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
            Moyenne
          </Badge>
        );
      case 'basse':
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            Basse
          </Badge>
        );
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const highPriorityCount = tasks.filter(
    (task) => task.priority === 'haute' && !task.completed
  ).length;

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tâches</h1>
          <p className="mt-2 text-sm text-gray-700">
            Suivez et gérez vos tâches et rappels
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total tâches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Complétées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{completedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              En cours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Haute priorité
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{highPriorityCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Add task form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ajouter une nouvelle tâche</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Description de la tâche..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
              />
            </div>
            <Select value={assignee} onValueChange={setAssignee}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moi">Moi</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="haute">Haute</SelectItem>
                <SelectItem value="moyenne">Moyenne</SelectItem>
                <SelectItem value="basse">Basse</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={addTask} className="flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrer les tâches" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toutes">Toutes les tâches</SelectItem>
                <SelectItem value="complétées">Complétées</SelectItem>
                <SelectItem value="en cours">En cours</SelectItem>
                <SelectItem value="haute">Haute priorité</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tasks list */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Card
            key={task.id}
            className={`${task.completed ? 'bg-gray-50' : ''} ${
              task.priority === 'haute' && !task.completed
                ? 'border-red-200 border-l-4'
                : ''
            }`}
          >
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="flex items-center h-5 mt-1">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTaskCompletion(task.id)}
                  />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <span
                        className={`text-sm font-medium ${
                          task.completed
                            ? 'line-through text-gray-500'
                            : 'text-gray-900'
                        }`}
                      >
                        {task.title}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        Client: {task.client} | Séance: {task.session}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {getPriorityBadge(task.priority)}
                      <Badge
                        variant={task.completed ? 'default' : 'secondary'}
                        className={
                          task.completed
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : ''
                        }
                      >
                        {task.completed ? (
                          <CheckIcon className="h-3 w-3 mr-1" />
                        ) : (
                          <ClockIcon className="h-3 w-3 mr-1" />
                        )}
                        {task.completed ? 'Complétée' : 'En cours'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-xs text-gray-500">
                      Assigné à: {task.assignee} | Échéance: {task.dueDate}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteTask(task.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">Aucune tâche trouvée</div>
              <div className="text-sm text-gray-500">
                Essayez de modifier vos filtres ou d'ajouter une nouvelle tâche
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
