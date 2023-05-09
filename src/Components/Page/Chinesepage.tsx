import React, { Fragment, useState } from "react";
import axios from "axios";
import { Navbar } from "../Template/Navbar";
import { Banner } from "../Template/Banner";
import { Footer } from "../Template/Footer";
import { Topchinese } from "../Template/Topchinese";
import { FoodCard } from "../Template/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { PageTitle } from "../Atom/PageTitle";
import { Card_lazyloading } from "../Template/Card_lazyloading";
import { Errormessage } from "../Organism/Errormessage";
import { dataType } from "../../types/datatypes";
import { BsFilterLeft } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

export const Chinesepage = () => {
  const [foodData, setFoodData] = useState([]);
  const [filteredlist, setFilteredlist] = useState([]);
  const [cancelQuery, setCancelquery] = useState<boolean>(false);
  const [filterQuery, setFilterQuery] = useState<string>();
  const [searchterm, setSearchterm] = useState<string>("");

  const options = {
    method: "GET",
    url: "https://chinese-food-db.p.rapidapi.com/",
    headers: {
      // "X-RapidAPI-Key": "5312ed048amsh03ba71e9c5ebb31p10336djsnc538ae0495e9",
      "X-RapidAPI-Host": "the-mexican-food-db.p.rapidapi.com",
      // 2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2
    },
  };

  const getChinese = () => {
    axios
      .request(options)
      .then(function (response) {
        setFoodData(response.data);
        setFilteredlist(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    return foodData;
  };

  const { data, isLoading, isError, isSuccess } = useQuery(
    ["mexicanfood"],
    getChinese
  );

  const filterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    let newlist = [...foodData];
    newlist = newlist.filter((item: dataType) => {
      return (
        item.difficulty.toLocaleLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    });
    setFilteredlist(newlist);
  };

  const filterbySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    setSearchterm(e.target.value);
    if (query.length >= 1) {
      setCancelquery(() => true);
    } else if (query.length === 0) {
      setCancelquery(false);
    }
  };

  const clear_Input = (e: React.FormEvent) => {
    e.preventDefault();
    document.forms[0].reset();
    setCancelquery(false);
  };

  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Chinese food"
        text="Nǐ xǐhuān chī shénme? 你喜欢吃什么？"
        image="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      />
      <Topchinese />
      <section className="">
        <PageTitle pagetitle="Our Chinese recipes" />
        <div>
          <section className="sort_data">
            <form className="search_container" onSubmit={clear_Input}>
              <input
                id="search"
                type="text"
                placeholder="search"
                onChange={filterbySearch}
              />
              <button
                className={`clear_btn ${cancelQuery ? "active" : "inactive"}`}
              >
                {cancelQuery ? <RxCross2 size={20} /> : <FiSearch size={20} />}
              </button>
            </form>
            <div className="filter_container">
              <p>
                <b>Difficulty :</b>
              </p>
              <div className="filter__sub_container">
                <span className="filter_icon">
                  <BsFilterLeft color="green" size="20" />
                </span>
                <select
                  className="select"
                  name="filterQuery"
                  onChange={filterData}
                  value={filterQuery}
                >
                  <option value="">Sort by : All</option>
                  <option value="Easy"> Easy </option>
                  <option className="medium" value="medium">
                    {" "}
                    Medium{" "}
                  </option>
                </select>
              </div>
            </div>
          </section>
          <div>
            {isLoading ? (
              <Card_lazyloading />
            ) : isError ? (
              <Errormessage />
            ) : (
              <div className="card_container">
                {filteredlist
                  .filter((item: dataType) => {
                    if (searchterm === "") {
                      return item;
                    } else if (
                      item.title
                        .toLowerCase()
                        .includes(searchterm.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item: any, i: number) => {
                    if (i < 15) {
                      return (
                        <FoodCard
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          difficulty={item.difficulty}
                          image={item.image}
                        />
                      );
                    }
                  })}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
