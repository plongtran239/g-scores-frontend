'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SearchCard = ({ setRegNum }: { setRegNum: Dispatch<SetStateAction<number | null>> }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeRegistrationNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const parsed = Number(inputValue);
    if (isNaN(parsed)) return;
    setRegNum(parsed);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Registration</CardTitle>
        <CardDescription>Enter registration number for detail scores</CardDescription>
      </CardHeader>
      <CardContent className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="registration-number">Registration Number</Label>
        <div className="flex gap-2">
          <Input
            id="registration-number"
            placeholder="Enter registration number"
            value={inputValue}
            onChange={handleChangeRegistrationNumber}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            type="number"
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default SearchCard;
