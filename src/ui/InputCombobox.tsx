import { capitalize, cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";
import { Check, Plus, PlusCircle, Search } from "lucide-react";
import React from "react";
import { Button } from "./Button";
import { Input } from "./input";
import { Separator } from "./separator";

type Props = {
  selectedValue: string;
  placeholder?: string;
  options: string[];
  triggerProps?: React.ComponentProps<typeof Button>;
  onSelectOption: (value: string) => void;
};

export default function InputCombobox({
  selectedValue,
  options,
  placeholder = "Search...",
  triggerProps,
  onSelectOption,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const filterOptions = options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          onClick={() => setOpen(true)}
          {...triggerProps}
          className={cn(
            !selectedValue && "text-slate-400",
            triggerProps?.className
          )}
        >
          <p className="w-full text-ellipsis overflow-hidden text-left">
            {selectedValue || placeholder}
          </p>
        </Button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content className="bg-white p-2 rounded-md shadow-lg max-w-[300px]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            <Input
              placeholder="Search exercise..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="pl-10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible::ring-offset-0"
            />
          </div>

          <Separator className="my-4" />

          <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            {filterOptions.map((option) => {
              const isSelected =
                option.toLowerCase() === selectedValue.toLowerCase();

              return (
                <Button
                  key={option}
                  variant="ghost"
                  className={cn(
                    "w-full text-left justify-normal px-2",
                    isSelected && "bg-slate-100"
                  )}
                  onClick={() => {
                    onSelectOption(option);
                    setOpen(false);
                    setValue("");
                  }}
                >
                  {isSelected && <Check className="mr-2 h-4 w-4" />}
                  <p className="text-ellipsis overflow-hidden">{option}</p>
                </Button>
              );
            })}

            {filterOptions.length === 0 && (
              <Button
                variant="ghost"
                className="w-full text-left justify-normal px-2"
                onClick={() => {
                  onSelectOption(capitalize(value));
                  setOpen(false);
                  setValue("");
                }}
              >
                <PlusCircle className="mr-2 h-4 w-4 flex-shrink-0" />
                <p className="text-ellipsis overflow-hidden">{value}</p>
              </Button>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
