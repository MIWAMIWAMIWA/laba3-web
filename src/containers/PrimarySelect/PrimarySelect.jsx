import React from "react";
import { SelectWrapper } from "./PrimarySelect.styled";


const PrimarySelect = ({ children, ...props }) => (
    <SelectWrapper {...props}>{children}</SelectWrapper>
);

export const sortOptions = [
    { value: "no_sort", label: "No sort" },
    { value: "price", label: "Sort by price" },
];

// Define filter options
export const filterOptions = [
    { value: "all", label: "All categories" },
    { value: "wired", label: "wired" },
    { value: "earbuds", label: "earbuds" },
    { value: "headset", label: "headset" },
];

// Define second sort options
export const sortOptions2 = [
    { value: "no_sort", label: "No sort" },
    { value: "name", label: "Sort by name" },
];
export default PrimarySelect;