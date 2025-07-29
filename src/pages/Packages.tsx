import { useState } from 'react';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Packages() {
  const [packages] = useState([
    {
      id: 1,
      name: 'Portrait Essentiel',
      description: 'Séance photo individuelle en studio',
      price: 150,
      duration: 60,
      photos: 10,
      includes: ['Séance de 1h', '10 photos retouchées', 'Gallery en ligne'],
      extras: [
        { name: 'Photos supplémentaires', price: 15 },
        { name: 'Tirages', price: 25 },
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Famille',
      description: 'Séance photo pour toute la famille',
      price: 250,
      duration: 90,
      photos: 20,
      includes: [
        'Séance de 1h30',
        '20 photos retouchées',
        'Gallery en ligne',
        '1 tirage 20x30cm',
      ],
      extras: [
        { name: 'Photos supplémentaires', price: 12 },
        { name: 'Tirages supplémentaires', price: 20 },
        { name: 'Album photo', price: 80 },
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Bébé',
      description: 'Séance photo pour bébés et enfants',
      price: 200,
      duration: 90,
      photos: 15,
      includes: [
        'Séance de 1h30',
        '15 photos retouchées',
        'Gallery en ligne',
        'Accessoires fournis',
      ],
      extras: [
        { name: 'Photos supplémentaires', price: 15 },
        { name: 'Tirages', price: 22 },
        { name: 'Album bébé', price: 60 },
      ],
      popular: false,
    },
    {
      id: 4,
      name: 'Premium',
      description: 'Notre offre complète avec tous les avantages',
      price: 450,
      duration: 120,
      photos: 50,
      includes: [
        'Séance de 2h',
        '50 photos retouchées',
        'Gallery en ligne',
        '5 tirages 20x30cm',
        'Album photo premium',
        'Maquillage inclus',
      ],
      extras: [
        { name: 'Photos supplémentaires', price: 10 },
        { name: 'Tirages supplémentaires', price: 18 },
        { name: 'Séance supplémentaire', price: 200 },
      ],
      popular: false,
    },
  ]);

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forfaits</h1>
          <p className="mt-2 text-sm text-gray-700">
            Gérez vos offres et forfaits photo
          </p>
        </div>
        <Button className="flex items-center">
          <PlusIcon className="h-4 w-4 mr-2" />
          Nouveau forfait
        </Button>
      </div>

      {/* Packages list */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`relative overflow-hidden ${
              pkg.popular ? 'border-indigo-500 border-2' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-semibold">
                Populaire
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{pkg.name}</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
              <p className="text-gray-600">{pkg.description}</p>
              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-900">
                  {pkg.price}€
                </span>
                <span className="text-gray-500"> / séance</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Durée:</span>
                    <span className="ml-2 font-medium">{pkg.duration} min</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Photos:</span>
                    <span className="ml-2 font-medium">{pkg.photos}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Inclus:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Extras:</h4>
                  <div className="space-y-1">
                    {pkg.extras.map((extra, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm"
                      >
                        <span>{extra.name}</span>
                        <Badge variant="outline">+{extra.price}€</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" className="flex-1">
                    Modifier
                  </Button>
                  <Button className="flex-1">Dupliquer</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
