declare module 'clsx' {
    type ClassValue = string | number | null | undefined | { [key: string]: boolean } | ClassValue[];
  
    export default function clsx(...classes: ClassValue[]): string;
  }