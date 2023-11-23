import React from "react";
import { SelectWrapper } from "./PrimarySelect.styled";


const PrimarySelect = ({ children, ...props }) => (
    <SelectWrapper {...props}>{children}</SelectWrapper>
);

export const sortOptions = [
    { value: "no_sort", label: "No sort" },
    { value: "name", label: "Sort by name" },
    { value: "price", label: "Sort by price" },
    { value: "popularity", label: "Sort by popularity" },
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
    { value: false, label: "No reverse" },
    { value: true, label: "Reverse the list" },
];

export default PrimarySelect;