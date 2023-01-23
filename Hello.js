import React, { useState } from 'react';
import Table from './Table1';
import { User } from './User';

function Hello() {
  const [searchValue, setSearchValue] = useState('');
  const search = (data) => {
    return data.filter(
      (item) =>
        item.Name_.toLowerCase().includes(searchValue) ||
        item.City_.toLowerCase().includes(searchValue) ||
        item.State_.toLowerCase().includes(searchValue)
    );
  };

  return (
    <div>
      <div className="w-full py-4 px-2">
        <h4 className="text-black font-sans font-semibold">Hello Users</h4>
      </div>

      <div className="w-full px-2">
        <input
          type="text"
          placeholder="Search box"
          className="text-black font-sans rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>

      <div className="w-full px-2">
        <input
          type="text"
          placeholder="Search City"
          className="text-black font-sans rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>

      <div className="w-full px-2">
        <input
          type="text"
          placeholder="Search State"
          className="text-black font-sans rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </div>

      <div className="py-4 px-2">
        <Table data={search(User)} />
      </div>
    </div>
  );
}

export default Hello;
