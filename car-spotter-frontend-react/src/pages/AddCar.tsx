
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { addCar } from '@/utils/api';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AddCar = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { brand, model, year, price } = formData;
    
    if (!brand.trim() || !model.trim() || !year.trim() || !price.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return false;
    }

    const yearNum = parseInt(year);
    const priceNum = parseFloat(price);

    if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear() + 1) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid year",
        variant: "destructive",
      });
      return false;
    }

    if (isNaN(priceNum) || priceNum <= 0) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await addCar({
        brand: formData.brand.trim(),
        model: formData.model.trim(),
        year: parseInt(formData.year),
        price: parseFloat(formData.price),
      });
      
      toast({
        title: "Success",
        description: "Car added successfully!",
      });
      
      // Reset form
      setFormData({
        brand: '',
        model: '',
        year: '',
        price: '',
      });
      
      // Navigate back to car list
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add car. Please try again.",
        variant: "destructive",
      });
      console.error('Error adding car:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/')}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to List
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Car</h1>
          <p className="text-gray-600 mt-1">Fill in the details to add a new car</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Car Details</CardTitle>
          <CardDescription>
            Enter the information for the new car you'd like to add to the collection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  name="brand"
                  type="text"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="e.g., Toyota, BMW, Mercedes"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  name="model"
                  type="text"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="e.g., Camry, X3, C-Class"
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="e.g., 2023"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., 25000"
                  min="0"
                  step="0.01"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? <LoadingSpinner size="sm" /> : 'Add Car'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/')}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCar;
