import React, { Fragment, useState } from "react";
import { Navbar } from "../Organism/Navbar";
import { Banner } from "../Organism/Banner";
import { Footer } from "../Organism/Footer";
import axios from "axios";
import { Topcocktail } from "../Organism/Topcocktail";
import { FoodCard } from "../Organism/FoodCard";
import { Card_lazyloading } from "../Organism/Card_lazyloading";
import { useQuery } from "@tanstack/react-query";
import { PageTitle } from "../Atom/PageTitle";
import { Errormessage } from "../Molecule/Errormessage";
import { dataType } from "../../types/datatypes";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsFilterLeft } from "react-icons/bs";

export const Cocktailpage = () => {
  const [foodData, setFoodData] = useState([]);
  const [filteredlist, setFilteredlist] = useState([]);
  const [cancelQuery, setCancelquery] = useState<boolean>(false);
  const [filterQuery, setFilterQuery] = useState<string>();
  const [searchterm, setSearchterm] = useState<string>("");

  const options = {
    method: "GET",
    url: "https://the-cocktail-db3.p.rapidapi.com/",
    headers: {
      // "X-RapidAPI-Key":   "2eb9578c9emsh80336b04e9b9b41p1b565ajsnec3d31f4b6b2",
      "X-RapidAPI-Host": "the-cocktail-db3.p.rapidapi.com",
    },
  };

  const getCocktail = () => {
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
    ["cocktail"],
    getCocktail
  );

  const filterData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;
    let newlist = [...foodData];
    newlist = newlist.filter((item: dataType) => {
      return item.difficulty.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    console.log(newlist);
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
    // setFilteredlist(food);
    setCancelquery(false);
  };

  return (
    <Fragment>
      <Navbar />
      <Banner
        header="Our  Cocktail"
        text="...sip"
        image="https://media.istockphoto.com/id/1307922399/photo/four-hands-holding-glasses-with-yellow-and-red-fruit-cocktails-in-a-toast.jpg?s=612x612&w=0&k=20&c=OQwJ1jFspFU22KgP7VNO1-roUSBsg2qBQaIJMTQlMXg="
      />
      <Topcocktail />
      <PageTitle pagetitle="Our Cocktail recipes" />
      <section>
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
