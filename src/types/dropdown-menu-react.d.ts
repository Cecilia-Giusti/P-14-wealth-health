declare module "@cecigiu2b/dropdown-menu-react" {
  const DropdownMenu: React.FC<{
    name: string;
    options: Array<any>;
    customClassSelect?: string;
    customClassOption?: string;
    getValue: Dispatch<React.SetStateAction<string | null>>;
  }>;
  export { DropdownMenu };
}
