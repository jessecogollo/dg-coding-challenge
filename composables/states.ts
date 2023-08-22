export const useToogle = (toogleValue: boolean) => {
  return useState<boolean>("toogle", () =>
    toogleValue === undefined ? true : toogleValue
  );
};

export const useUpdateToogle = (value: boolean) => {
  const cookieToogle = useCookie<boolean>("toogle");
  cookieToogle.value = value;

  const toogle = useState<boolean>("toogle");
  toogle.value = value;
};
