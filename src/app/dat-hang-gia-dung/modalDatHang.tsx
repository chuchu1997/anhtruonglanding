"use client";
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import axios from "axios";
interface props {
  className?: string;
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}
interface provinceInterface {
  province_id: string;
  province_name: string;
  province_type: string;
}
interface provinceDistrictInterface {
  district_id: string;
  district_name: string;
  district_type: string;
  province_id: string;
}
const ModalDatHang = ({ isOpen, onChange, className }: props) => {
  const [provinceList, setProvinceList] = useState<provinceInterface[]>([]);
  const [provinceDistrictList, setProviceDistrictList] = useState<provinceDistrictInterface[]>([]);
  const [provinceWardList, setProvinceWardList] = useState([]);

  const [selectProvince, setSelectProvince] = useState<string>();
  const [selectDistrict, setSelectDistrict] = useState<string>();
  const fetchProvince = async () => {
    await axios
      .get(`https://vapi.vnappmob.com/api/province/`)
      .then((res) => {
        // setProvinceList((prev) => ({ ...prev, dataFetching }));
        setProvinceList(res.data.results);
      })
      .catch((error) => console.log(error));
  };
  const fetchDistrict = async (provinceID: string) => {
    console.log("SELECT PROVINCE", provinceID);
    await axios
      .get(`https://vapi.vnappmob.com/api/province/district/${provinceID}`)
      .then((res) => {
        setProviceDistrictList(res.data.results);
        // setProvinceList((prev) => ({ ...prev, dataFetching }));
        // setProvinceList(res.data.results);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchProvince();
  }, []);
  const Modal = ({ isOpen }: any) => {
    if (!isOpen) return null;

    return (
      <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 w-full h-screen  ${className}`}>
        <div className="bg-white rounded-lg border border-[red] min-h-[80vh] shadow-lg p-6 max-w-md w-full relative">
          <div
            className="absolute right-[12px] top-[5px] bg-[grey] rounded-md p-1 cursor-pointer"
            onClick={() => {
              onChange(false);
              document.body.style.overflow = "unset";
            }}
          >
            <X color={"white"}></X>
          </div>
          <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
          <div className="select-address">
            <form className="max-w-sm mx-auto mb-[10px]">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Chọn Tỉnh , Thành Phố
              </label>
              <select
                value={selectProvince}
                onChange={async (event) => {
                  setSelectProvince(event.target.value.toString());

                  await fetchDistrict(event.target.value);
                  console.log("EVENT", event.target.value);
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="none">Chọn Tỉnh Thành Phố</option>
                {provinceList.map((value, index) => {
                  return (
                    <option value={value.province_id} key={index}>
                      {value.province_name}
                    </option>
                  );
                })}
              </select>
            </form>

            <form className="max-w-sm mx-auto mb-[10px]">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quận,Huyện
              </label>
              <select
                onChange={(event) => {
                  //   console.log("CHANGE CVALL", event.target.value);
                  //   setSelectProvince(event.target.value.toString());
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="none">Chọn Tỉnh Thành Phố</option>
                {provinceDistrictList.map((value, index) => {
                  return (
                    <option value={value.district_id} key={index}>
                      {value.district_name}
                    </option>
                  );
                })}
              </select>
            </form>

            <form className="max-w-sm mx-auto mb-[10px]">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phường Xã
              </label>
              <select
                onChange={(event) => {
                  console.log("CHANGE CVALL", event.target.value);

                  setSelectProvince(event.target.value.toString());
                }}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="none">Chọn Tỉnh Thành Phố</option>
                {provinceList.map((value, index) => {
                  return (
                    <option value={value.province_id} key={index}>
                      {value.province_name}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <p className="mb-4">This is the content of the modal.</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={async () => {
                onChange(false);
                document.body.style.overflow = "unset";
              }}
            >
              Close
            </button>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={async () => {
                console.log("PRO", provinceList);
              }}
            >
              API
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        //   setIsOpen(!isOpen);
        //   document.body.style.overflow = "unset";
        onChange(!isOpen);
      }}
    />
  );
};

export default ModalDatHang;
