export type PageBaseProps<ParamsT = {}> = {
  params: { lang: "es" | "en" } & ParamsT;
};

export type LayoutBaseProps<T = {}> = {
  children: React.ReactNode;
} & T;
