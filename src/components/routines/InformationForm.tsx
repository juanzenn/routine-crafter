import { BODY_PARTS_OPTIONS, DIFFICULTIES_OPTIONS } from "@/lib/constants";
import { Checkbox } from "@/ui/checkbox";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Textarea } from "@/ui/textarea";
import { FormType } from "./RoutineForm";

type InformationFormProps = {
  form: FormType;
  onChangeString: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeSelect: (value: string, name: keyof FormType) => void;
  onChangeBodyPart: (value: string) => void;
};

export default function InformationForm({
  form,
  onChangeBodyPart,
  onChangeSelect,
  onChangeString,
}: InformationFormProps) {
  return (
    <section className="space-y-7">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="name"
          name="name"
          placeholder="Best chest workout"
          value={form.name}
          onChange={onChangeString}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Write down some notes about this routine..."
          value={form.notes ?? ""}
          onChange={onChangeString}
          required
        />
      </div>

      <div>
        <div className="mb-4">
          <Label>Body Part(s)</Label>
          <p className="text-xs text-gray-500 mt-1">Select all that apply</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {BODY_PARTS_OPTIONS.map(({ label, value }) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                id={value}
                onCheckedChange={() => onChangeBodyPart(value)}
                checked={form.bodyParts.includes(value)}
              />
              <Label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="difficulty">Difficulty</Label>
        <Select onValueChange={(value) => onChangeSelect(value, "difficulty")}>
          <SelectTrigger id="difficulty" className="w-1/2">
            <SelectValue placeholder="Select a difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Difficulty</SelectLabel>
              {DIFFICULTIES_OPTIONS.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
