import React, { createContext, useContext, useState } from "react"
import { CategoryType, CategoryContextAction } from "../@types/pokemon"

export type CategoryContextType = CategoryType & CategoryContextAction 

type CategoryContextProviderProps = {
  children: React.ReactNode
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined)

export const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [category, setCategory] = useState<string>('false')


  return (
    <>
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
    </>
  )
}

export const useCategoryContext = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
      throw new Error('useCategory must be used within a CategoryContextProvider');
  }
  return context;
};
