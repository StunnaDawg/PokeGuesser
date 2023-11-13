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
  const [categoryStart, setCategoryStart] = useState<number>(0)
  const [categoryEnd, setCategoryEnd] = useState<number>(1015)


  return (
    <>
    <CategoryContext.Provider value={{ categoryStart, setCategoryStart, categoryEnd, setCategoryEnd }}>
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
