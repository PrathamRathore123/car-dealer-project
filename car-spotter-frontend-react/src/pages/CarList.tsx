import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fetchCars, Car } from '@/utils/api';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Car as CarIcon } from 'lucide-react';

const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    console.log('CarList useEffect triggered, location pathname:', location.pathname);
    loadCars();
  }, [location.pathname]); // Reload when navigating back to this page

  const loadCars = async () => {
    try {
      console.log('Loading cars...');
      setIsLoading(true);
      const carsData = await fetchCars();
      console.log('Received cars data:', carsData);
      setCars(carsData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load cars. Please try again.",
        variant: "destructive",
      });
      console.error('Error fetching cars:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Car Collection</h1>
          <p className="text-gray-600 mt-1">Browse our available vehicles</p>
        </div>
        <Link to="/add-car">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Car
          </Button>
        </Link>
      </div>

      {cars.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-gray-500">
              <CarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No cars available</h3>
              <p className="mb-4">Start by adding your first car to the collection.</p>
              <Link to="/add-car">
                <Button>Add Your First Car</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Card key={car.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {car.brand} {car.model}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {car.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price</span>
                    <span className="text-lg font-bold text-green-600">
                      {formatPrice(car.price)}
                    </span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>Brand: {car.brand}</div>
                      <div>Model: {car.model}</div>
                      <div>Year: {car.year}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
