import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function Clients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients] = useState([
    {
      id: 1,
      name: 'Marie Lambert',
      email: 'marie.lambert@example.com',
      phone: '06 12 34 56 78',
      address: '15 Rue de la Paix, 75002 Paris',
      tags: ['famille', 'régulier'],
      lastSession: '10 Juin 2023',
      totalSessions: 5,
      notes: 'Préfère les séances en extérieur',
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      email: 'thomas.dubois@example.com',
      phone: '06 23 45 67 89',
      address: '22 Avenue des Champs-Élysées, 75008 Paris',
      tags: ['pro', 'corporate'],
      lastSession: '5 Juin 2023',
      totalSessions: 2,
      notes: 'Besoin de photos pour LinkedIn',
    },
    {
      id: 3,
      name: 'Sophie Martin',
      email: 'sophie.martin@example.com',
      phone: '06 34 56 78 90',
      address: '8 Boulevard Haussmann, 75009 Paris',
      tags: ['bébé', 'nouveau'],
      lastSession: '1 Juin 2023',
      totalSessions: 1,
      notes: 'Première séance pour bébé de 3 mois',
    },
    {
      id: 4,
      name: 'Lucas Bernard',
      email: 'lucas.bernard@example.com',
      phone: '06 45 67 89 01',
      address: '35 Rue de Rivoli, 75004 Paris',
      tags: ['couple', 'mariage'],
      lastSession: '28 Mai 2023',
      totalSessions: 3,
      notes: 'Préparation pour mariage en septembre',
    },
    {
      id: 5,
      name: 'Emma Petit',
      email: 'emma.petit@example.com',
      phone: '06 56 78 90 12',
      address: '12 Place de la Bastille, 75011 Paris',
      tags: ['portrait', 'artiste'],
      lastSession: '25 Mai 2023',
      totalSessions: 4,
      notes: 'Portfolio pour exposition',
    },
  ]);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="mt-2 text-sm text-gray-700">
            Gérez votre base de clients et leur historique
          </p>
        </div>
        <Button className="flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Ajouter un client
        </Button>
      </div>

      {/* Search and filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Rechercher un client..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <FunnelIcon className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Clients list */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map((client) => (
          <Card key={client.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback>
                    {client.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{client.name}</CardTitle>
                  <p className="text-sm text-gray-500">{client.email}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="text-sm">{client.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Adresse</p>
                  <p className="text-sm">{client.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dernière séance</p>
                  <p className="text-sm">{client.lastSession}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total séances</p>
                  <p className="text-sm">{client.totalSessions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tags</p>
                  <div className="flex flex-wrap gap-1">
                    {client.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {client.notes && (
                  <div>
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="text-sm">{client.notes}</p>
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  Voir détails
                </Button>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
