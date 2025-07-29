import { useState } from 'react';
import {
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyEuroIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Dashboard() {
  const [stats] = useState([
    {
      name: 'Chiffre d\'affaires mensuel',
      value: '3 450 €',
      change: '+12%',
      changeType: 'positive' as const,
      icon: CurrencyEuroIcon,
    },
    {
      name: 'Séances ce mois',
      value: '24',
      change: '+8%',
      changeType: 'positive' as const,
      icon: CalendarIcon,
    },
    {
      name: 'Nouveaux clients',
      value: '12',
      change: '+3%',
      changeType: 'positive' as const,
      icon: UserGroupIcon,
    },
    {
      name: 'Taux de conversion',
      value: '68%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: ChartBarIcon,
    },
  ]);

  const [upcomingSessions] = useState([
    {
      id: 1,
      client: 'Marie Lambert',
      type: 'Portrait famille',
      date: '15 Juin 2023',
      time: '14:00',
      status: 'confirmé',
    },
    {
      id: 2,
      client: 'Thomas Dubois',
      type: 'Portrait pro',
      date: '16 Juin 2023',
      time: '10:30',
      status: 'confirmé',
    },
    {
      id: 3,
      client: 'Sophie Martin',
      type: 'Bébé',
      date: '17 Juin 2023',
      time: '15:45',
      status: 'en attente',
    },
    {
      id: 4,
      client: 'Lucas Bernard',
      type: 'Couple',
      date: '18 Juin 2023',
      time: '11:00',
      status: 'confirmé',
    },
  ]);

  const [recentClients] = useState([
    {
      id: 1,
      name: 'Marie Lambert',
      email: 'marie.lambert@example.com',
      phone: '06 12 34 56 78',
      lastSession: '10 Juin 2023',
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      email: 'thomas.dubois@example.com',
      phone: '06 23 45 67 89',
      lastSession: '5 Juin 2023',
    },
    {
      id: 3,
      name: 'Sophie Martin',
      email: 'sophie.martin@example.com',
      phone: '06 34 56 78 90',
      lastSession: '1 Juin 2023',
    },
  ]);

  const [pendingPayments] = useState([
    {
      id: 1,
      client: 'Marie Lambert',
      amount: '150 €',
      dueDate: '20 Juin 2023',
      status: 'en attente',
    },
    {
      id: 2,
      client: 'Lucas Bernard',
      amount: '250 €',
      dueDate: '22 Juin 2023',
      status: 'en attente',
    },
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="mt-2 text-sm text-gray-700">
          Vue d'ensemble de votre activité photographique
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Upcoming sessions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Séances à venir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {session.client}
                      </h3>
                      <p className="text-sm text-gray-500">{session.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {session.date} à {session.time}
                      </p>
                      <Badge
                        variant={
                          session.status === 'confirmé'
                            ? 'default'
                            : 'secondary'
                        }
                        className="mt-1"
                      >
                        {session.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent clients */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Clients récents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-500">{client.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Dernière séance: {client.lastSession}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending payments */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Paiements en attente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {payment.client}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Échéance: {payment.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-gray-900">
                        {payment.amount}
                      </p>
                      <Badge variant="secondary" className="mt-1">
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
