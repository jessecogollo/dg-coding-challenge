export const useToogle = (toogleValue: any) => {
  return useState<boolean>("toogle", () =>
    toogleValue === undefined ? true : toogleValue
  );
};

export const useUpdateToogle = (value: any) => {
  const cookieToogle = useCookie<boolean>("toogle");
  cookieToogle.value = value;

  const toogle = useState<boolean>("toogle");
  toogle.value = value;
};
