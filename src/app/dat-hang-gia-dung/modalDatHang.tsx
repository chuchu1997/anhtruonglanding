"use client";
import React, { useEffect, useState, CSSProperties, useRef } from "react";
import { X } from "react-feather";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import MoonLoader from "react-spinners/MoonLoader";

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
  type: z.enum(["1", "2"], {
    required_error: "You need to select a notification type.",
  }),
});

const ModalDatHang = ({ isOpen, onChange, className }: props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: { type: "1" },
    resolver: zodResolver(FormSchema),
  });

  const [provinceList, setProvinceList] = useState<provinceInterface[]>([]);
  const [provinceDistrictList, setProviceDistrictList] = useState<provinceDistrictInterface[]>([]);
  const [provinceWardList, setProvinceWardList] = useState<provinceWardInterface[]>([]);

  const [selectProvince, setSelectProvince] = useState<string>("");
  const [selectDistrict, setSelectDistrict] = useState<string>("");
  const [selectWard, setSelectWard] = useState<string>("");

  let [loading, setLoading] = useState(false);

  const address = useRef<HTMLInputElement | null>(null);
  const phoneNumber = useRef<HTMLInputElement | null>(null);
  const username = useRef<HTMLInputElement | null>(null);

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
    if (address.current?.value.trim() == "") {
      window.alert("Vui lòng nhập địa chỉ");
      return false;
    }
    if (phoneNumber.current?.value.trim() == "") {
      window.alert("Vui lòng nhập sdt");
      return false;
    }
    if (username.current?.value.trim() == "") {
      window.alert("Vui lòng nhập tên của anh/chị");
      return false;
    }

    // if (form.getValues().address.trim() == "") {
    //   window.alert("Vui lòng nhập địa chỉ của bạn");
    //   return false;
    // }
    // if (form.getValues().phoneNumber.trim() == "") {
    //   window.alert("Vui lòng nhập sdt của bạn");
    //   return false;
    // }

    return validate;
  };
  const handleSubmitForm = async () => {
    // setLoading(true);

    if (validateForm()) {
      setLoading(true);

      const formData = new FormData();
      let provinceFilter = provinceList.find((provinceItem) => provinceItem.province_id == selectProvince);
      let districtFilter = provinceDistrictList.find((districtItem) => districtItem.district_id == selectDistrict);
      let wardFilter = provinceWardList.find((wardItem) => wardItem.ward_id == selectWard);
      formData.append("province", provinceFilter != null ? provinceFilter.province_name : "");
      formData.append("district", districtFilter != null ? districtFilter.district_name : "");
      formData.append("ward", wardFilter != null ? wardFilter.ward_name : "");
      formData.append("address", address.current ? address.current.value : "");
      formData.append("phoneNumber", phoneNumber.current ? phoneNumber.current.value : "");
      formData.append("username", username.current ? username.current.value : "");
      formData.append("amount", form.getValues().type);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",

          body: formData,
        });
        const result = await res.json();
        window.alert(result.message);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        window.alert("Xảy ra lỗi không thể đặt hàng");
      }
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
        className={`fixed  top-0 bottom-0 left-0 right-0 h-screen z-50 overflow-hidden   flex items-center justify-center  bg-gray-900 bg-opacity-50  ${className}`}
      >
        <div className="bg-white  shadow-lg p-6 max-w-md w-full relative h-full overflow-y-auto ">
          <div
            className="absolute right-[12px] top-[5px] bg-[grey] rounded-md p-1 cursor-pointer"
            onClick={() => {
              onChange(false);
              document.body.style.overflow = "unset";
            }}
          >
            <X color={"white"} size={20}></X>
          </div>
          <h2 className="text-xl font-bold text-center mb-4 text-[24px] uppercase italic">Máy massage cổ vai gáy</h2>

          <div className="description-product">
            <div className="relative h-[200px] w-full mb-4">
              <Image src="/maymassage/5.webp" priority alt="image" className="object-cover rounded-2xl" fill quality={100}></Image>
            </div>
          </div>
          <Form {...form}>
            <form className="w-full space-y-6">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1" />
                          </FormControl>
                          <FormLabel className="font-semibold italic leading-6">Mua 1 máy massage với giá 269.000đ + 20k ship</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="2" />
                          </FormControl>
                          <FormLabel className="font-semibold italic leading-6">Mua 2 máy massage với giá 530.000đ (Miễn phí ship)</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>

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
            <div className="mb-[10px]">
              <Label>Địa chỉ</Label>
              <Input type="text" placeholder="Vui lòng nhập địa chỉ" ref={address} />{" "}
            </div>

            <div className="mb-[10px]">
              <Label>Tên anh/chị</Label>
              <Input type="text" placeholder="Vui lòng nhập tên của anh/chị" ref={username} />{" "}
            </div>
            <div>
              <Label>SDT</Label>
              <Input type="number" placeholder="Vui lòng nhập sdt" ref={phoneNumber} />{" "}
            </div>

            {/* <Input key="1213" type="text" placeholder="Nhập giá trị" defaultValue={address} onChange={handleChange} required />
            <Input key="2zz" type="number" placeholder="Nhập giá trị" defaultValue={phoneNumber} onChange={handleChangePhone} required /> */}
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
