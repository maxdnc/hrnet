import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectScrollable({
  options,
  placeholder,
  onChange,
  value,
  name,
}) {
  return (
    <Select
      onValueChange={(newValue) =>
        onChange({ target: { name, value: newValue } })
      }
      value={value}
    >
      <SelectTrigger className="w-full bg-indigo-50">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.id} value={option.name}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
