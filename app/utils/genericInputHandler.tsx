const genericInputHandler =
  <T extends object>(
    action: React.Dispatch<React.SetStateAction<T>>,
  ) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    action((prev) => ({ ...prev, [name]: value }));
  };
export default genericInputHandler;
