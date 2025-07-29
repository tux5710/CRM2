import { useState } from 'react';
import {
  Cog6ToothIcon,
  UserIcon,
  BellIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function Settings() {
  const [user, setUser] = useState({
    name: 'Jean Dupont',
    email: 'jean.dupont@photostudio.fr',
    phone: '06 12 34 56 78',
    address: '15 Rue de la Paix, 75002 Paris',
    bio: 'Photographe professionnel spécialisé dans les portraits, les photos de famille et les événements.',
  });

  const [studio, setStudio] = useState({
    name: 'PhotoStudio CRM',
    address: '15 Rue de la Paix, 75002 Paris',
    phone: '01 23 45 67 89',
    email: 'contact@photostudio.fr',
    website: 'www.photostudio.fr',
    siren: '123 456 789',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    appointmentReminders: true,
    paymentReminders: true,
    newClientAlerts: true,
    marketingEmails: false,
  });

  const [billing, setBilling] = useState({
    plan: 'professionnel',
    billingCycle: 'mensuel',
    nextBillingDate: '15 Juillet 2023',
    cardNumber: '**** **** **** 1234',
    cardExpiry: '12/25',
    cardName: 'Jean Dupont',
  });

  const handleUserChange = (field: string, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleStudioChange = (field: string, value: string) => {
    setStudio({ ...studio, [field]: value });
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications({ ...notifications, [field]: value });
  };

  const handleBillingChange = (field: string, value: string) => {
    setBilling({ ...billing, [field]: value });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        <p className="mt-2 text-sm text-gray-700">
          Gérez votre compte et vos préférences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile" className="flex items-center">
            <UserIcon className="h-4 w-4 mr-2" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="studio" className="flex items-center">
            <Cog6ToothIcon className="h-4 w-4 mr-2" />
            Studio
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center">
            <BellIcon className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center">
            <CreditCardIcon className="h-4 w-4 mr-2" />
            Facturation
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <ShieldCheckIcon className="h-4 w-4 mr-2" />
            Sécurité
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    value={user.name}
                    onChange={(e) => handleUserChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => handleUserChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={user.phone}
                    onChange={(e) => handleUserChange('phone', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={user.address}
                    onChange={(e) => handleUserChange('address', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Biographie</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  value={user.bio}
                  onChange={(e) => handleUserChange('bio', e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="studio">
          <Card>
            <CardHeader>
              <CardTitle>Informations du studio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="studio-name">Nom du studio</Label>
                  <Input
                    id="studio-name"
                    value={studio.name}
                    onChange={(e) => handleStudioChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="studio-email">Email du studio</Label>
                  <Input
                    id="studio-email"
                    type="email"
                    value={studio.email}
                    onChange={(e) => handleStudioChange('email', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="studio-phone">Téléphone du studio</Label>
                  <Input
                    id="studio-phone"
                    value={studio.phone}
                    onChange={(e) => handleStudioChange('phone', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="studio-address">Adresse du studio</Label>
                  <Input
                    id="studio-address"
                    value={studio.address}
                    onChange={(e) => handleStudioChange('address', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="studio-website">Site web</Label>
                  <Input
                    id="studio-website"
                    value={studio.website}
                    onChange={(e) => handleStudioChange('website', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="studio-siren">Numéro SIREN</Label>
                  <Input
                    id="studio-siren"
                    value={studio.siren}
                    onChange={(e) => handleStudioChange('siren', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Notifications par email</div>
                    <div className="text-sm text-gray-500">
                      Recevoir des notifications importantes par email
                    </div>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('emailNotifications', checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Notifications par SMS</div>
                    <div className="text-sm text-gray-500">
                      Recevoir des rappels par SMS
                    </div>
                  </div>
                  <Switch
                    checked={notifications.smsNotifications}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('smsNotifications', checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Rappels de rendez-vous</div>
                    <div className="text-sm text-gray-500">
                      Recevoir des rappels avant vos séances photo
                    </div>
                  </div>
                  <Switch
                    checked={notifications.appointmentReminders}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('appointmentReminders', checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Rappels de paiement</div>
                    <div className="text-sm text-gray-500">
                      Recevoir des notifications pour les paiements en attente
                    </div>
                  </div>
                  <Switch
                    checked={notifications.paymentReminders}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('paymentReminders', checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Alertes nouveaux clients</div>
                    <div className="text-sm text-gray-500">
                      Recevoir une notification lorsqu'un nouveau client s'inscrit
                    </div>
                  </div>
                  <Switch
                    checked={notifications.newClientAlerts}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('newClientAlerts', checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Emails marketing</div>
                    <div className="text-sm text-gray-500">
                      Recevoir des emails sur les nouvelles fonctionnalités et offres
                    </div>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) =>
                      handleNotificationChange('marketingEmails', checked)
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Enregistrer les modifications</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Abonnement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="plan">Plan actuel</Label>
                      <Select value={billing.plan} onValueChange={(value) => handleBillingChange('plan', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="essai">Essai gratuit</SelectItem>
                          <SelectItem value="basique">Basique</SelectItem>
                          <SelectItem value="professionnel">Professionnel</SelectItem>
                          <SelectItem value="entreprise">Entreprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="billing-cycle">Cycle de facturation</Label>
                      <Select value={billing.billingCycle} onValueChange={(value) => handleBillingChange('billingCycle', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mensuel">Mensuel</SelectItem>
                          <SelectItem value="annuel">Annuel (-20%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label>Prochaine date de facturation</Label>
                    <div className="mt-1 text-sm font-medium">
                      {billing.nextBillingDate}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Mettre à jour l'abonnement</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Méthode de paiement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="card-number">Numéro de carte</Label>
                      <Input
                        id="card-number"
                        value={billing.cardNumber}
                        onChange={(e) => handleBillingChange('cardNumber', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="card-expiry">Date d'expiration</Label>
                      <Input
                        id="card-expiry"
                        value={billing.cardExpiry}
                        onChange={(e) => handleBillingChange('cardExpiry', e.target.value)}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="card-name">Nom sur la carte</Label>
                      <Input
                        id="card-name"
                        value={billing.cardName}
                        onChange={(e) => handleBillingChange('cardName', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Mettre à jour la carte</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Historique des factures</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Juin 2023</div>
                        <div className="text-sm text-gray-500">Professionnel - Mensuel</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Mai 2023</div>
                        <div className="text-sm text-gray-500">Professionnel - Mensuel</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Avril 2023</div>
                        <div className="text-sm text-gray-500">Professionnel - Mensuel</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Sécurité du compte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="current-password">Mot de passe actuel</Label>
                <Input id="current-password" type="password" />
              </div>
              <div>
                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                <Input id="new-password" type="password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Mettre à jour le mot de passe</Button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Authentification à deux facteurs
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Activer l'authentification à deux facteurs</div>
                    <div className="text-sm text-gray-500">
                      Ajoutez une couche de sécurité supplémentaire à votre compte
                    </div>
                  </div>
                  <Button variant="outline">Activer</Button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Sessions actives
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Chrome sur Windows</div>
                      <div className="text-sm text-gray-500">Paris, France - Actif maintenant</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Déconnecter
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Safari sur iPhone</div>
                      <div className="text-sm text-gray-500">Paris, France - Il y a 2 jours</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Déconnecter
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
