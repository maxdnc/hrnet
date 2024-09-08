'use client';

import { useState, useEffect } from 'react';
import { format, subYears, parse } from 'date-fns';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { ScrollArea } from '@/components/ui/scroll-area';

export function DatePicker({ label, onChange, name, value, error }) {
  const [date, setDate] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const currentDate = new Date();
  const hundredYearsAgo = subYears(currentDate, 100);
  const years = Array.from(
    { length: currentDate.getFullYear() - hundredYearsAgo.getFullYear() + 1 },
    (_, i) => currentDate.getFullYear() - i
  );

  useEffect(() => {
    if (value) {
      const parsedDate = parse(value, 'yyyy-MM-dd', new Date());
      setDate(parsedDate);
      setYear(parsedDate.getFullYear());
      setMonth(parsedDate.getMonth());
    } else {
      setDate(null);
      setYear(new Date().getFullYear());
      setMonth(new Date().getMonth());
    }
  }, [value]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (newDate) {
      onChange({ target: { name, value: format(newDate, 'yyyy-MM-dd') } });
    } else {
      onChange({ target: { name, value: '' } });
    }
  };

  const handleYearChange = (selectedYear) => {
    const newYear = parseInt(selectedYear);
    setYear(newYear);
    if (
      newYear === currentDate.getFullYear() &&
      month > currentDate.getMonth()
    ) {
      setMonth(currentDate.getMonth());
    }
  };

  const handleMonthChange = (increment) => {
    const newMonth = month + increment;
    const newYear = year + Math.floor(newMonth / 12);
    if (
      newYear < hundredYearsAgo.getFullYear() ||
      newYear > currentDate.getFullYear()
    ) {
      return;
    }
    if (
      newYear === currentDate.getFullYear() &&
      newMonth > currentDate.getMonth()
    ) {
      return;
    }
    setMonth((newMonth + 12) % 12);
    setYear(newYear);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${error ? 'text-red-400' : ''}`}
      >
        {error ? error : label}
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal mt-1 bg-indigo-50',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              <span className="font-medium ">{format(date, 'PPP')}</span>
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <div className="flex items-center justify-between p-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleYearChange(year - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Select value={year.toString()} onValueChange={handleYearChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue>{year}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="h-80">
                  {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleYearChange(year + 1)}
              disabled={
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth()
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            month={new Date(year, month)}
            onMonthChange={(newMonth) => {
              setMonth(newMonth.getMonth());
              setYear(newMonth.getFullYear());
            }}
            fromDate={hundredYearsAgo}
            toDate={currentDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
