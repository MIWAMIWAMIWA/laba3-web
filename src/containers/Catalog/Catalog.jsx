import React, {useContext, useState} from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper} from "./Catalog.styled";
import CardItem from "../../containers/CardItem/CardItem";
import PrimarySelect from "../../containers/PrimarySelect/PrimarySelect";
import SearchInput from "../../containers/SearchInput/SearchInput";
import { sortOptions, sortOptions2, filterOptions } from '../PrimarySelect/PrimarySelect';
import { ItemContext } from "../ItemContext/Items";
import PrimaryButton from "../PrimaryButton/PrimaryButton";



const sortingFunctions = {
    "price": (a,b) => a.price - b.price,
    "name": (a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0),
    "popularity": (a,b) => b.rating - a.rating,
    "no_sort": () => {}
};

const Catalog = () => {
    const data = useContext(ItemContext);
    const [items, setItems] = useState(data);

    const [sortMode, setSortMode] = useState("no_sort");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);
    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        let newItems = [...data];


        const searchPattern = new RegExp(search, "i");

        newItems = newItems.filter(a => searchPattern.test(a.title));

        newItems.sort(sortingFunctions[sort]);

        if (filter !== "all") {
            newItems = newItems.filter(a => a.category === filter);
        }

        if (reverse) {
            newItems.reverse();
        }


        setItems([...newItems]);

    }

    const onSortChange = (value) => {

        setSortMode(value);


    }

    const onFilterChange = (value) => {

        setFilterMode(value);


    }

    const onSearch = (value) => {

        setSearchValue(value);
        applyFilters({sort: sortMode, filter: filterMode, search: searchValue, reverse: reverseSort})
    }

    const reverseChange = (reverse) => {
        setReverseSort(reverse);


    }
    const options = [
        {
            key :"1",
            options: sortOptions,
            mode: sortMode,
            change : onSortChange

        },
        {
            key : "2",
            options: sortOptions2,
            mode: reverseSort,
            change: reverseChange

        },
        {
            key : "3",
            options: filterOptions,
            mode: filterMode,
            change : onFilterChange

        },
    ]

    return (
        <div>
            <FiltersContainer>
                <SelectWrapper>
                    {options.map((item) => (
                        <PrimarySelect
                            key={ item.key}
                            options = {item.options }
                            defaultValue={item.mode}
                            onChange={item.change}
                        />
                    ))}

                </SelectWrapper>
                <PrimaryButton onClick={() => applyFilters({ sort: sortMode, filter: filterMode, search: searchValue, reverse: reverseSort })}>
                    Apply
                </PrimaryButton>
                <SearchInput
                    defaultValue={searchValue}
                    placeholder=""
                    onSearch={onSearch}
                />
            </FiltersContainer>
            <ItemsContainer> {
                items.length ? items.map((item) => (
                <CardItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    imageSrc={item.image}
                    price={item.price}
                    rating = {item.rating}
                />
            )) :
                <h2>No Items</h2>
            }
            </ItemsContainer>
        </div>
    )
};


export default Catalog;