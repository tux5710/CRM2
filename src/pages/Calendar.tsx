import { useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week'>('month');

  const sessions = [
    {
      id: 1,
      title: 'Marie Lambert - Famille',
      date: new Date(2023, 5, 15, 14, 0),
      duration: 90,
      status: 'confirmé',
      type: 'famille',
    },
    {
      id: 2,
      title: 'Thomas Dubois - Pro',
      date: new Date(2023, 5, 16, 10, 30),
      duration: 60,
      status: 'confirmé',
      type: 'pro',
    },
    {
      id: 3,
      title: 'Sophie Martin - Bébé',
      date: new Date(2023, 5, 17, 15, 45),
      duration: 120,
      status: 'en attente',
      type: 'bébé',
    },
    {
      id: 4,
      title: 'Lucas Bernard - Couple',
      date: new Date(2023, 5, 18, 11, 0),
      duration: 90,
      status: 'confirmé',
      type: 'couple',
    },
    {
      id: 5,
      title: 'Emma Petit - Portrait',
      date: new Date(2023, 5, 20, 16, 0),
      duration: 60,
      status: 'confirmé',
      type: 'portrait',
    },
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(
      direction === 'prev' ? newDate.getMonth() - 1 : newDate.getMonth() + 1
    );
    setCurrentDate(newDate);
  };

  const getSessionsForDay = (day: number) => {
    return sessions.filter(
      (session) =>
        session.date.getDate() === day &&
        session.date.getMonth() === currentDate.getMonth() &&
        session.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    // Add day names
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={`day-name-${i}`}
          className="text-center font-medium text-sm py-2 text-gray-500"
        >
          {dayNames[i]}
        </div>
      );
    }

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const daySessions = getSessionsForDay(day);
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === month &&
        new Date().getFullYear() === year;

      days.push(
        <div
          key={`day-${day}`}
          className={`h-24 border border-gray-200 p-1 overflow-hidden ${
            isToday ? 'bg-blue-50' : ''
          }`}
        >
          <div className="text-right text-sm font-medium">{day}</div>
          <div className="mt-1 space-y-1">
            {daySessions.slice(0, 2).map((session) => (
              <div
                key={session.id}
                className={`text-xs p-1 rounded truncate ${
                  session.type === 'famille'
                    ? 'bg-blue-100 text-blue-800'
                    : session.type === 'pro'
                    ? 'bg-green-100 text-green-800'
                    : session.type === 'bébé'
                    ? 'bg-pink-100 text-pink-800'
                    : session.type === 'couple'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {session.title.split(' - ')[0]}
              </div>
            ))}
            {daySessions.length > 2 && (
              <div className="text-xs text-gray-500">
                +{daySessions.length - 2} plus
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const renderWeekView = () => {
    const days = [];
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    
    // Get the current week's dates
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      
      const daySessions = sessions.filter(
        (session) =>
          session.date.getDate() === date.getDate() &&
          session.date.getMonth() === date.getMonth() &&
          session.date.getFullYear() === date.getFullYear()
      );
      
      days.push(
        <div key={`day-${i}`} className="border border-gray-200 rounded-lg p-4">
          <div className="font-medium text-gray-900 mb-2">
            {dayNames[i]} {date.getDate()}/{date.getMonth() + 1}
          </div>
          <div className="space-y-2">
            {daySessions.map((session) => (
              <div
                key={session.id}
                className={`p-3 rounded-lg ${
                  session.type === 'famille'
                    ? 'bg-blue-50 border border-blue-200'
                    : session.type === 'pro'
                    ? 'bg-green-50 border border-green-200'
                    : session.type === 'bébé'
                    ? 'bg-pink-50 border border-pink-200'
                    : session.type === 'couple'
                    ? 'bg-purple-50 border border-purple-200'
                    : 'bg-yellow-50 border border-yellow-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-900">
                      {session.title.split(' - ')[0]}
                    </div>
                    <div className="text-sm text-gray-500">
                      {session.date.getHours()}:{session.date.getMinutes().toString().padStart(2, '0')} - {session.date.getHours() + Math.floor(session.duration / 60)}:{(session.date.getMinutes() + (session.duration % 60)).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <Badge
                    variant={
                      session.status === 'confirmé' ? 'default' : 'secondary'
                    }
                  >
                    {session.status}
                  </Badge>
                </div>
              </div>
            ))}
            {daySessions.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                Aucune séance prévue
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return days;
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendrier</h1>
          <p className="mt-2 text-sm text-gray-700">
            Planifiez et gérez vos séances photo
          </p>
        </div>
        <Button className="flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Nouvelle séance
        </Button>
      </div>

      {/* Calendar controls */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateMonth('prev')}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-semibold mx-4">
                {currentDate.toLocaleDateString('fr-FR', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateMonth('next')}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={view === 'month' ? 'default' : 'outline'}
                onClick={() => setView('month')}
              >
                Mois
              </Button>
              <Button
                variant={view === 'week' ? 'default' : 'outline'}
                onClick={() => setView('week')}
              >
                Semaine
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar view */}
      <Card>
        <CardContent className="p-0">
          {view === 'month' ? (
            <div className="grid grid-cols-7 gap-0">
              {renderMonthView()}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              {renderWeekView()}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Session types legend */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-sm">Types de séances</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-100 rounded-sm mr-2"></div>
              <span className="text-sm">Famille</span>
            </div>
            <div className="flex items-center">
              <div
              className="w-3 h-3 bg-green-100 rounded-sm mr-2"></div>
              <span className="text-sm">Professionnel</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-100 rounded-sm mr-2"></div>
              <span className="text-sm">Bébé</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-100 rounded-sm mr-2"></div>
              <span className="text-sm">Couple</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-100 rounded-sm mr-2"></div>
              <span className="text-sm">Portrait</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
