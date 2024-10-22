"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import { X } from "react-feather";
import axios from "axios";
import { Input } from "@/components/ui/input";

import Image from "next/image";

import MoonLoader from "react-spinners/MoonLoader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
interface props {
  className?: string;
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

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
interface provinceWardInterface {
  district_id: string;
  ward_id: string;
  ward_name: string;
  ward_type: string;
}

const FormSchema = z.object({
  address: z.string().min(3, {
    message: "Address must be at least 2 characters.",
  }),
});

const ModalDatHang = ({ isOpen, onChange, className }: props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: "",
    },
  });

  const [provinceList, setProvinceList] = useState<provinceInterface[]>([]);
  const [provinceDistrictList, setProviceDistrictList] = useState<provinceDistrictInterface[]>([]);
  const [provinceWardList, setProvinceWardList] = useState<provinceWardInterface[]>([]);

  const [selectProvince, setSelectProvince] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");
  const [selectWard, setSelectWard] = useState<string>("");

  let [loading, setLoading] = useState(false);

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
    await axios
      .get(`https://vapi.vnappmob.com/api/province/district/${provinceID}`)
      .then((res) => {
        setProviceDistrictList(res.data.results);
        // setProvinceList((prev) => ({ ...prev, dataFetching }));
        // setProvinceList(res.data.results);
      })
      .catch((error) => console.log(error));
  };
  const fetchWard = async (districtID: string) => {
    await axios
      .get(`https://vapi.vnappmob.com/api/province/ward/${districtID}`)
      .then((res) => {
        setProvinceWardList(res.data.results);
        // setProvinceList((prev) => ({ ...prev, dataFetching }));
        // setProvinceList(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  const validateForm = () => {
    let validate = true;
    if (selectProvince.trim() == "") {
      window.alert("Vui lòng chọn tỉnh , thành phố");
      return false;
    }
    if (selectDistrict.trim() == "") {
      window.alert("Vui lòng chọn quận ,huyện");
      return false;
    }
    if (selectWard.trim() == "") {
      window.alert("Vui lòng chọn phường , xã");
      return false;
    }
    if (form.getValues().address.trim() == "") {
      window.alert("Vui lòng nhập địa chỉ của bạn");
      return false;
    }

    return validate;
  };
  const handleSubmitForm = async () => {
    if (validateForm()) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  //   useEffect(() => {
  //     validateForm();
  // }, [name, email, password])

  const Modal = ({ isOpen }: any) => {
    if (!isOpen) return null;

    return (
      <div
        className={`fixed top-0 overflow-y-hidden left-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 w-full h-screen   ${className}`}
      >
        <div className="bg-white   shadow-lg p-6 max-w-md w-full relative h-full overflow-y-auto ">
          <div
            className="absolute right-[12px] top-[5px] bg-[grey] rounded-md p-1 cursor-pointer"
            onClick={() => {
              onChange(false);
              document.body.style.overflow = "unset";
            }}
          >
            <X color={"white"}></X>
          </div>
          <h2 className="text-xl font-bold text-center mb-4 text-[28px] uppercase italic">Thông tin đơn hàng</h2>

          <div className="description-product">
            <div className="relative h-[320px] w-full mb-4">
              <Image src="/maymassage/5.webp" alt="image" className="object-cover object-bottom rounded-2xl" fill quality={100}></Image>
            </div>
            <h2 className="font-bold text-center mb-[20px] capitalize text-[22px] italic">Máy massage cổ vai gáy</h2>
          </div>

          <div className="select-address my-4 mx-2">
            <form className="max-w-sm mx-auto mb-[10px]">
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Chọn Tỉnh,Thành Phố
              </label>
              <select
                value={selectProvince}
                onChange={async (event) => {
                  setSelectProvince(event.target.value.toString());
                  setProviceDistrictList([]);
                  setProvinceWardList([]);

                  setSelectDistrict("");
                  setSelectWard("");
                  await fetchDistrict(event.target.value);
                }}
                id="countries"
                className="overflow-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

            <div className="province flex items-start gap-4">
              <form className="max-w-sm mx-auto mb-[10px]">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Quận,Huyện
                </label>
                <select
                  value={selectDistrict}
                  onChange={async (event) => {
                    setSelectDistrict(event.target.value);
                    await fetchWard(event.target.value);
                    // fetchWard(event.target.value);
                    //   console.log("CHANGE CVALL", event.target.value);
                    //   setSelectProvince(event.target.value.toString());
                  }}
                  id="countries"
                  className="overflow-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="none">Chọn Quận,Huyện</option>
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
                  value={selectWard}
                  onChange={(event) => {
                    setSelectWard(event.target.value);
                  }}
                  id="countries"
                  className="overflow-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="none">Chọn Phường Xã</option>
                  {provinceWardList.map((value, index) => {
                    return (
                      <option value={value.ward_id} key={index}>
                        {value.ward_name}
                      </option>
                    );
                  })}
                </select>
              </form>
            </div>

            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Địa chỉ của bạn</FormLabel>
                      <FormControl>
                        <Input placeholder="Vui lòng nhập địa chỉ" {...field} autoFocus className="focus-visible:ring-0 " />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>

            <div className="mt-[20px] text-[18px] font-bold">Tổng tiền đơn hàng : (209k) + 20k ship</div>
          </div>
          <div className="flex justify-center w-full">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full font-bold text-[18px] italic"
              onClick={async () => {
                handleSubmitForm();
                // onChange(false);
                // document.body.style.overflow = "unset";
              }}
            >
              Đặt Hàng
            </button>
          </div>
        </div>

        {loading && (
          <div className="fixed z-50 h-screen left-0 right-0 bg-[#eeeeee]/70 flex items-center">
            <MoonLoader loading={loading} cssOverride={override} size={100} color="#134B70" />
          </div>
        )}
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
