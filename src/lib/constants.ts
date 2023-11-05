import { DifficultyEnum, WeightUnitEnum } from "@prisma/client";
import { LucideIcon, SignalHigh, SignalLow, SignalMedium } from "lucide-react";

export const BODY_PARTS_OPTIONS = [
  { value: "clolrliw30000rfqqnv5g5jf2", label: "Chest" },
  { value: "clolrliw80001rfqqz4iqau7s", label: "Back" },
  { value: "clolrliw90002rfqqv8jbzb04", label: "Shoulders" },
  { value: "clolrliwa0003rfqqhol6d17j", label: "Biceps" },
  { value: "clolrliwb0004rfqqvvzk0n4u", label: "Triceps" },
  { value: "clolrliwc0005rfqq78sdf4sc", label: "Core" },
  { value: "clolrliwd0006rfqqc3ytkzob", label: "Quads" },
  { value: "clolrliwe0007rfqqeczk52wc", label: "Hamstrings" },
  { value: "clolrliwg0008rfqqnqgrz0pj", label: "Glutes" },
];

export const DIFFICULTIES_OPTIONS: { value: DifficultyEnum; label: string }[] =
  [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advance", label: "Advance" },
  ];

export const WEIGHT_UNITS_OPTIONS: {
  value: WeightUnitEnum;
  label: string;
}[] = [
  { value: "Kilogram", label: "kg" },
  { value: "Pound", label: "lb" },
];
