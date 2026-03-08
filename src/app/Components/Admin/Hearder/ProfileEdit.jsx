



"use client";

// import BenefitListTable from "@/app/Components/Portal/Tables/BenefitList";
import { useSidebarContext } from "@/app/data/SidebarProvider";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { usePermissionCheck } from "@/app/context/pagePermissionCheck";
import { useCommonVariableContext } from "@/CommonVariableProvider";
import { Form, Select, Switch } from "antd";
import { FaCalendarAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import { IoCameraOutline } from "react-icons/io5";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const genders = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
    { value: 3, label: "Others" },
];
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const ProfileEdit = () => {
    const router = useRouter();
    const pathname = usePathname();
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL_HRMS;
    const serverPortalUrl = process.env.NEXT_PUBLIC_SERVER_URL_PORTAL;
    const serverHRMUrl = process.env.NEXT_PUBLIC_SERVER_URL_HMS;

    const usersPath = "/api/hrm/users";
    const updateuserpath = "/api/hrm/users/update-profile";

    const rolePath = "/api/roles-get";
    const rolePathPortal = "/api/get-mdx-role";
    const rolePathHMS = "/api/get-roles";

    const providerPathPortal = "/api/provider-get";
    const groupclinicPathPortal = "/api/groupclinic-get";
    const corporationsPathPortal = "/api/get-mdx-corporations";
    const entitiesPathPortal = "/api/get-entities";
    const practicePathPortal = "/api/get-mdx-practice";

    const [rolesPortal, setRolesPortal] = useState([]);
    const [rolesHrm, setRolesHrm] = useState([]);

    const [providerPortal, setProviderPortal] = useState([]);
    const [groupclinicPortal, setGroupclinicPortal] = useState([]);
    const [corporationsPortal, setCorporationsPortal] = useState([]);
    const [entitiesPortal, setEntitiesPortal] = useState([]);
    const [practicePortal, setPracticePortal] = useState([]);
    const [showFiledOnUsertype, setShowFiledOnUsertype] = useState("");
    const [buttonloader, setButtonloader] = useState(false);
    const [hmsdata, setHmsdata] = useState("");
    const [site_access_name, setSiteAccessName] = useState([]);
    const [roles, setRoles] = useState([]);
    const [change, setChange] = useState(false);
    const [editUser, setEditUser] = useState([]);



    const { sidebarOpen } = useSidebarContext();
    const [validationErrors, setValidationErrors] = useState(false);

    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const {
        editId,
        setEditId,
        rowsCount,
        isToaster,
        setIsToaster,
    } = useCommonVariableContext();

    const [profileImage, setProfileImage] = useState(""); // Default profile image

    const handleProfileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for preview
            console.log("Selected Image URL:", imageUrl);
            setProfileImage(imageUrl);
            setEditUser((prev) => ({
                ...prev,
                file: file, // Store the actual file
            }));
        }
    };


  

    const [formData, setFormData] = useState({
        lastname: "",
        firstname: "",
        gender: "",
        dob: "",
        phone: "",
        email: "",
        crop: "",
        practice: "",
        group: "",
        entity: "",
        username: "",
        password: "",
        confirm_password: "",
        tofa: "",
        signature: "",
        file: "",
    });

    
   

    const handleNumericChange = (field, value) => {
        // Remove all non-digit characters
        const numericValue = value.replace(/\D/g, "");

        // Determine format based on field name
        let formattedValue;
        if (field === "phone" ||
            field === "userphone"
        ) {
            // Format as XXX-XXX-XXXX for phone numbers
            formattedValue = numericValue
                .slice(0, 10) // Limit input to 10 digits
                .replace(/^(\d{3})(\d{3})(\d{0,4})$/, "$1-$2-$3") // Format as XXX-XXX-XXXX
                .replace(/-$/, ""); // Remove trailing dash if length is short
        } else {
            // Default to numeric value without formatting
            formattedValue = numericValue;
        }


        setEditUser((prevData) => ({
            ...prevData,
            [field]: formattedValue,
        }));
    };

    const fetchDataEdit = async () => {
        try {

            const userdata = localStorage.getItem("userdata");
            const normaldata = JSON.parse(userdata);

            const accessToken = localStorage.getItem("accessToken");
            const fullUrl = `${serverUrl}${usersPath}/${normaldata.id}`;
            const response = await fetch(fullUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            // console.log("API Response:", data);
            setHmsdata(data?.hmsdata?.department_name);
            
            const mobileNumber =
                typeof data.user.phone === "string"
                    ? data.user.phone
                    : String(data.user.phone || "");
            const formattedNumber =
                mobileNumber.length === 10
                    ? `${mobileNumber.slice(0, 3)}-${mobileNumber.slice(
                        3,
                        6
                    )}-${mobileNumber.slice(6)}`
                    : mobileNumber;
            console.log("API avatar_url:", data.avatar_url);
            setEditUser({
              ...data.user,
              profile: data.user.avatar_url,
              userId: data.user.id,
              phone: formattedNumber,
              hrmsRole: data.user.type_id,
              hmsRole: data.hmsdata?.department_id || null,
              portalRole: data.portaldata?.user_type_id || null,
              portalfeeval: data.portaldata?.feeval,
              portalEntity: data.portaldata?.entity_id,
              portalPractice: data.portaldata?.practice_id,
              portalProvider: data.portaldata?.provider_id,
              portalGroup: data.portaldata?.group_id,
              portalCorp: data.portaldata?.corp_id,
              // sites: data.user.site_access.split(',').map(item => {item.trim()})
              sites: data.user.site_access
                ? data.user.site_access.split(",").map((item) => item.trim())
                : [],
            });

            console.log("Fetched Avatar URL:", data?.avatar_url); 
            if (data.user && data.user.avatar_url) {
              const imageUrl = data.user.avatar_url.startsWith("http")
                ? data.user.avatar_url
                : `${serverUrl}${data.user.avatar_url}`;
          console.log("Fetched Avatar URL Success:", imageUrl);
              setProfileImage(imageUrl);
            }


            

            
        } catch (error) {
            console.error("Error in fetchDataEdit:", error);
        }
    };

    useEffect(() => {
        // console.log("helooo", formData);
    }, [formData]);


    useEffect(() => {
        fetchDataEdit();
    }, []);


    const handleEditSubmit = async (e) => {
      e.preventDefault();
      let formErrors = {};

      if (!editUser.name) {
        formErrors["name"] = "Field Is Required";
      }

      if (!editUser.last_name) {
        formErrors["last_name"] = "Field Is Required";
      }

      //  if (!editUser.phone) {
      //    formErrors["phone"] = "Field Is Required";
      // }

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        toast(
          <div className="flex items-center gap-3">
            <Image
              width={28}
              height={28}
              src="/Common/icons8-box-important.gif"
              alt=""
              unoptimized
            />
            <div>
              <div className="flex justify-between">
                <p className="text-yellow-600 font-medium">Warning</p>
                <button
                  onClick={() => toast.dismiss()}
                  className="ml-auto  text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <RxCross2 size={14} />
                </button>
              </div>
              <p>Fill the required fields !</p>
            </div>
          </div>,
          {
            duration: 5000,
            className: "toast-warning",
            style: {
              background: "#fffbe6",
              color: "#3e3a1a",
            },
          }
        );
        return;
      }
      setErrors({});
      setLoading(true);
      const mobile = editUser.phone?.replace(/-/g, "");
      const postBody = new FormData();
      postBody.append("name", editUser.name);
      postBody.append("last_name", editUser.last_name);
      postBody.append("phone", mobile);

      if (editUser.file instanceof File) {
        postBody.append("profile", editUser.file);
      }
      const accessToken = localStorage.getItem("accessToken");
      const api = `${serverUrl}${updateuserpath}`;
      try {
        const response = await fetch(api, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: postBody,
        });
        // if (response.ok) {
        const data = await response.json();
        if (data.flag === 0) {
          toast(
            <div className="flex items-center gap-3">
              <Image
                width={28}
                height={28}
                src="/Common/icons8-box-important.gif"
                alt=""
                unoptimized
              />
              <div>
                <div className="flex justify-between">
                  <p className="text-yellow-600 font-medium">Warning</p>
                  <button
                    onClick={() => toast.dismiss()}
                    className="ml-auto  text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <RxCross2 size={14} />
                  </button>
                </div>
                <p>{`${data.error}`}</p>
              </div>
            </div>,
            {
              duration: 5000,
              className: "toast-warning",
              style: {
                background: "#fffbe6", // Light yellow background for warning
                color: "#3e3a1a", // Dark yellow-brown text
              },
            }
          );
          setLoading(false);
          return;
        }
        toast.success(
          <div className="flex items-center gap-3">
            <Image
              width={28}
              height={28}
              src="/Common/icons8-check-mark.gif"
              alt=""
              unoptimized
            />
            <div>
              <div className="flex justify-between">
                <p className="text-green-600 font-medium">Success</p>
                <button
                  onClick={() => toast.dismiss()}
                  className="ml-auto  text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <RxCross2 size={14} />
                </button>
              </div>
              <p>{`${data.message} `}</p>
            </div>
          </div>,
          {
            duration: 5000,
            className: "toast-success",
            icon: null,
          }
        );
        fetchDataEdit();
        setEditUser({
          name: "",
          last_name: "",
          phone: "",
          profile: "",
        });
        setChange(true);
        fetchDataEdit();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.warning("Something went wrong. Try again");
        console.error(error);
      }
    };



    useEffect(() => {
        if (!isToaster) {
            toast.dismiss();
        } else {
            setIsToaster(false);
        }
        // Dismiss all toasts when route changes
    }, []);


    /* ROLES */
    const fetchRoles = async () => {
        const storedRoles = localStorage.getItem("rolesnew");

        if (storedRoles) {
            const roledata = JSON.parse(storedRoles);
            // console.log(roledata, "roledata");

            // const employeeLabel = roledata.find(
            //   (role) => role?.label?.toLowerCase() === "employee"
            // );
            // if (employeeLabel) {
            //   SetEmployee(employeeLabel.value);
            // }

            const employeeLabel = roledata.find(
                (role) => role?.label?.trim().toLowerCase() === "employee"
            );

            if (employeeLabel) {
                SetEmployee(employeeLabel.value);
            } else {
                console.warn("No matching label found for 'employee'");
            }



            // If branches are found in localStorage, set them directly
            setRoles(JSON.parse(storedRoles));
        } else {
            const url = `${serverUrl}${rolePath}`;
            return fetch(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // const datatostore = data.roles.map((item) => ({
                    const datatostore = data.role.map((item) => ({
                        value: item.id,
                        label: item.name,
                    }));
                    localStorage.setItem("rolesnew", JSON.stringify(datatostore));
                    setRoles(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return []; // Optionally return an empty array in case of an error
                });
        }


    };
    useEffect(() => {
        fetchRoles();
    }, []);
    /* ROLES ENDS */
    // console.log(employeeid, "employeeLabel....");


    /* ROLES portal*/
    const fetchRolesPortal = async () => {
        const storedRoles = localStorage.getItem("rolesPortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setRolesPortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${rolePathPortal}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.role_id,
                        label: item.role_name,
                    }));
                    localStorage.setItem("rolesPortal", JSON.stringify(datatostore));
                    setRolesPortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchRolesPortal();
    }, []);

    useEffect(() => {
        // console.log("Fetched rolesPortal:", rolesPortal);
    }, [rolesPortal]);

    /* ROLES ENDS */

    /* HRM portal*/
    const fetchRolesHMS = async () => {
        const storedRoles = localStorage.getItem("rolesHrm");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setRolesHrm(JSON.parse(storedRoles));
        } else {
            const url = `${serverHRMUrl}${rolePathHMS}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.id,
                        label: item.name,
                    }));
                    localStorage.setItem("rolesHrm", JSON.stringify(datatostore));
                    setRolesHrm(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchRolesHMS();
    }, []);
    /* HRM ENDS */

    /* provider portal*/
    const fetchproviderPortal = async (id) => {

        if (!id) {
            console.error("Role ID is required to fetch providers");
            return;
        }

        const storedRoles = localStorage.getItem("providerPortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setProviderPortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${providerPathPortal}/${id}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.provider_id,
                        // label: item.first_name,
                        label: `${item.last_name} ${item.first_name}`,
                    }));
                    localStorage.setItem("providerPortal", JSON.stringify(datatostore));
                    setProviderPortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchproviderPortal();
    }, []);
    /* provider ENDS */

    /* groupclinic portal*/
    const fetchgroupclinicPortal = async () => {
        const storedRoles = localStorage.getItem("groupclinicPortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setGroupclinicPortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${groupclinicPathPortal}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.group_id,
                        label: item.group_name,
                    }));
                    localStorage.setItem("groupclinicPortal", JSON.stringify(datatostore));
                    setGroupclinicPortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchgroupclinicPortal();
    }, []);
    /* groupclinic ENDS */

    /* corporations portal*/
    const fetchCorporationsPortal = async () => {
        const storedRoles = localStorage.getItem("corporationsPortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setCorporationsPortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${corporationsPathPortal}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.corp_id,
                        label: item.name,
                    }));
                    localStorage.setItem("corporationsPortal", JSON.stringify(datatostore));
                    setCorporationsPortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchCorporationsPortal();
    }, []);
    /* corporations ENDS */


    /* entities portal*/
    const fetchEntitiesPortal = async () => {
        const storedRoles = localStorage.getItem("entitiesPortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setEntitiesPortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${entitiesPathPortal}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.entity_id,
                        label: item.name,
                    }));
                    localStorage.setItem("entitiesPortal", JSON.stringify(datatostore));
                    setEntitiesPortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchEntitiesPortal();
    }, []);
    /* entities ENDS */

    /* practice portal*/
    const fetchPracticePortal = async () => {
        const storedRoles = localStorage.getItem("practicePortal");

        if (storedRoles) {
            // If roles are found in localStorage, set them directly
            setPracticePortal(JSON.parse(storedRoles));
        } else {
            const url = `${serverPortalUrl}${practicePathPortal}`;
            return fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const datatostore = data.data.map((item) => ({
                        value: item.practice_id,
                        label: item.name,
                    }));
                    localStorage.setItem("practicePortal", JSON.stringify(datatostore));
                    setPracticePortal(datatostore);
                })
                .catch((error) => {
                    console.error("Failed to fetch data:", error);
                    return [];
                });
        }

    };
    useEffect(() => {
        fetchPracticePortal();
    }, []);
    /* practice ENDS */




    return (
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "#e6ffed", // Light green for success
                color: "#1a3e24",
              },
            },
            error: {
              style: {
                background: "#ffe6e6", // Light red for error
                color: "#3e1a1a",
              },
            },
            warning: {
              style: {
                background: "#fffbe6", // Light yellow for warning
                color: "#3e3a1a",
              },
            },
          }}
        />
        <div className=" pl-2 pr-2 md:pr-5 cursor-default">
          <section class="pb-14 my-auto ">
            <div class="lg:w-full md:w-full xs:w-[96%] mx-auto flex gap-4">
              <div class="w-full  mx-auto bg-[#f4f4f4] p-4  h-fit self-center ">
                <div class="">
                  <h2 class="text-left mt-2 font-semibold  mb-4 ">
                    <span className="bg-black text-white py-1 pb-[5px] rounded-lg px-4 capitalize">
                      {editUser.type}
                    </span>
                  </h2>
                  <form>
                    <div class=" py-3 w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                      <div
                        className="mx-auto flex pt-5 justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${
                            profileImage || "/Common/images.jpg"
                          })`,
                        }}
                      >
                        <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28">
                          <input
                            type="file"
                            name="profile"
                            id="upload_profile"
                            hidden
                            accept="image/*"
                            onChange={handleProfileChange}
                          />
                          <label htmlFor="upload_profile">
                            <IoCameraOutline
                              size={25}
                              className="text-blue-700 cursor-pointer"
                            />
                          </label>
                        </div>
                      </div>
                      <div class="flex justify-end"></div>
                    </div>

                    <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
                      <div className="w-full  ">
                        <label className="modal_label" htmlFor="first_name">
                          First Name
                        </label>{" "}
                        <span className="text-red-600 ml-1">*</span>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={editUser.name}
                          placeholder="Enter First Name"
                          onChange={(e) =>
                            setEditUser({ ...editUser, name: e.target.value })
                          }
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F9FAFB] border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        />
                        {errors.name && (
                          <p className="text-red-600 capitalize text-xs mt-1 ">
                            {errors.name}
                          </p>
                        )}{" "}
                      </div>

                      <div className="w-full  ">
                        <label className="modal_label" htmlFor="appraisal_date">
                          Last Name
                        </label>{" "}
                        <span className="text-red-600 ml-1">*</span>
                        <input
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="Enter Last Name"
                          value={editUser.last_name}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              last_name: e.target.value,
                            })
                          }
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F9FAFB] border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        />
                        {errors.last_name && (
                          <p className="text-red-600 capitalize text-xs mt-1 ">
                            {errors.last_name}
                          </p>
                        )}{" "}
                      </div>

                      <div className="w-full  ">
                        <label className="modal_label" htmlFor="phone">
                          Contact Number
                        </label>{" "}
                        <span className="text-red-600 ml-1">*</span>
                        <input
                          id="phone"
                          // placeholder="Enter Phone"
                          placeholder="123-123-1234"
                          type="tel"
                          name="phone"
                          value={editUser.phone}
                          onChange={(e) =>
                            handleNumericChange("phone", e.target.value)
                          }
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#F9FAFB] border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        />
                        {errors.phone && (
                          <p className="text-red-600 capitalize text-xs mt-1 ">
                            {errors.phone}
                          </p>
                        )}{" "}
                      </div>

                      <div>
                        <label className="modal_label" htmlFor="email">
                          Email
                        </label>{" "}
                        {/* <span className="text-red-600 ml-1">*</span> */}
                        <input
                          disabled
                          id="email"
                          type="email"
                          placeholder="Enter Email"
                          name="email"
                          value={editUser.email}
                          onChange={(e) =>
                            setEditUser({ ...editUser, email: e.target.value })
                          }
                          className="block  cursor-no-drop w-full px-4 py-2 mt-2 text-gray-700 bg-[#e9ecf0] border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                        />
                        {errors.email && (
                          <p className="text-red-600 capitalize text-xs mt-1 ">
                            {errors.email}
                          </p>
                        )}{" "}
                      </div>
                    </div>

                    {/* HRMS Checkbox */}
                    <div className="grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2">
                      <div className="w-full ">
                        <div className="selectdesabledprofile ">
                          <div className="flex items-center">
                            <label
                              htmlFor="hrms-checkbox"
                              className="modal_label w-full py-3 ms-2 text-sm text-gray-900"
                            >
                              HRMS Role{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                            </label>
                          </div>
                          <Select
                            className="bg-[#e9ecf0] selectdesabledprofile "
                            placeholder="Select HRMS Role"
                            value={editUser.hrmsRole || null}
                            name="hrmsRole"
                            // onChange={handleTypeEdithrms}
                            style={{
                              width: "100%",
                              height: "40px",
                            }}
                            options={roles}
                            showSearch
                            disabled
                            // disabled={!addUser.site_access[3]}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                          />
                          {errors.hrmsRole && (
                            <p className="text-red-600 capitalize text-xs mt-1 ">
                              {errors.hrmsRole}
                            </p>
                          )}{" "}
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="selectdesabledprofile ">
                          <div className="flex items-center">
                            <input
                              id="hms-role-checkbox"
                              name="sites"
                              checked={editUser?.sites?.includes("1")}
                              //   onChange={() => handleEditSiteAccessChange("1")}
                              //   disabled={editUser.hrmsRole === employeeid}
                              disabled
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                            />
                            <label
                              htmlFor="hms-role-checkbox"
                              className="modal_label w-full py-3 ms-2 text-sm text-gray-900"
                            >
                              HMS Role{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                            </label>
                          </div>
                          <Select
                            className="bg-white"
                            placeholder="Select HMS Role"
                            value={editUser?.hmsRole || null}
                            name="hmsRole"
                            // onChange={handleTypeEdithms}
                            style={{
                              width: "100%",
                              height: "40px",
                            }}
                            options={rolesHrm}
                            showSearch
                            disabled
                            // disabled={editUser.hrmsRole === employeeid || !editUser?.sites?.includes("1")}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                          />
                          {errors.hmsRole && (
                            <p className="text-red-600 capitalize text-xs mt-1 ">
                              {errors.hmsRole}
                            </p>
                          )}{" "}
                        </div>
                      </div>

                      <div className="w-full ">
                        <div className="selectdesabledprofile ">
                          <div className="flex items-center">
                            <input
                              id="portal-role-checkbox"
                              type="checkbox"
                              checked={editUser?.sites?.includes("2")}
                              //   onChange={() => handleEditSiteAccessChange("2")}
                              //   disabled={editUser.hrmsRole === employeeid}
                              name="list-radio"
                              disabled
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                            />
                            <label
                              for="portal-role-checkbox"
                              className="modal_label w-full py-3 ms-2 text-sm  text-gray-900 "
                            >
                              Portal{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                            </label>
                          </div>

                          <Select
                            className="bg-white"
                            placeholder="Select Portal Role"
                            value={editUser?.portalRole || null}
                            name="portal_role"
                            onChange={(value, label) => {
                              //   handleTypeEditportal(value, label)
                              //   fetchproviderPortal(value);
                            }}
                            style={{
                              width: "100%",
                              height: "40px",
                            }}
                            options={rolesPortal}
                            showSearch
                            disabled
                            // disabled={editUser.hrmsRole === employeeid || !editUser?.sites?.includes("2")}
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                          />
                          {errors.portalRole && (
                            <p className="text-red-600 capitalize text-xs mt-1">
                              {errors.portalRole}
                            </p>
                          )}
                        </div>
                      </div>

                      {editUser?.sites?.includes("2") && (
                        <>
                          <div className="w-full  mt-3 ">
                            <label
                              className="modal_label  w-full py-3 ms-2 text-sm text-gray-900"
                              htmlFor="feeval"
                            >
                              Fee
                            </label>{" "}
                            {/* <span className="text-red-600 ml-1">*</span> */}
                            <input
                              id="feeval"
                              type="text"
                              name="feeval"
                              placeholder="Enter Fee"
                              value={editUser?.portalfeeval}
                              disabled
                              //   onChange={(e) =>
                              //     setEditUser({ ...editUser, portalfeeval: e.target.value })
                              //   }
                              className="block w-full px-4 py-2 mt-2  text-gray-700 mb-0 bg-[#e9ecf0] border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                            />
                            {errors.portalfeeval && (
                              <p className="text-red-600 capitalize text-xs mt-1 ">
                                {errors.portalfeeval}
                              </p>
                            )}{" "}
                          </div>

                          <div className="selectdesabledprofile">
                            <label className="modal_label" htmlFor="entity_id">
                              Portal Entity
                            </label>{" "}
                            {/* <span className="text-red-600 ml-1">*</span> */}
                            <Select
                              className="bg-white mt-2"
                              placeholder="Select Portal Entities"
                              value={editUser.portalEntity || null}
                              name="entity_id"
                              //   onChange={handleTypeEditportalentity}
                              style={{
                                width: "100%",
                                height: "40px",
                              }}
                              options={entitiesPortal}
                              showSearch
                              disabled
                              // disabled={!editUser?.sites?.includes("2")}
                              filterOption={(input, option) =>
                                (option?.label ?? "")
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                            />
                            {errors.portalEntity && (
                              <p className="text-red-600 capitalize text-xs mt-1 ">
                                {errors.portalEntity}
                              </p>
                            )}{" "}
                          </div>
                        </>
                      )}
                    </div>

                    {editUser?.sites?.includes("2") && (
                      <>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-4 selectdesabledprofile">
                          {showFiledOnUsertype == "Corp Provider" ||
                          showFiledOnUsertype == "Group-Clinic Provider" ||
                          showFiledOnUsertype == "Practice Provider" ||
                          showFiledOnUsertype == "Referring Provider" ? (
                            <div className="selectdesabledprofile">
                              <label
                                className="modal_label"
                                htmlFor="provider_id"
                              >
                                Portal Provider
                              </label>{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                              <Select
                                className="bg-white mt-2"
                                placeholder="Select Portal Provider"
                                // value={addUser.provider_id}
                                value={editUser?.portalProvider || null}
                                name="provider_id"
                                // onChange={handleTypeEditportalprovider}
                                style={{
                                  width: "100%",
                                  height: "40px",
                                }}
                                options={providerPortal}
                                showSearch
                                disabled
                                // disabled={!editUser?.sites?.includes("2")}
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                              />
                              {errors.portalProvider && (
                                <p className="text-red-600 capitalize text-xs mt-1">
                                  {errors.portalProvider}
                                </p>
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {showFiledOnUsertype == "Group-Clinic Provider" ||
                          showFiledOnUsertype == "Group-Clinic Admin" ||
                          showFiledOnUsertype == "Group-Clinic Staff" ? (
                            <div className="selectdesabledprofile">
                              <label className="modal_label" htmlFor="group_id">
                                Portal Groupclinic
                              </label>{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                              <Select
                                className="bg-white mt-2"
                                placeholder="Select Portal Groupclinic"
                                value={editUser.portalGroup || null}
                                name="group_id"
                                // onChange={handleTypeEditportalgroup}
                                style={{
                                  width: "100%",
                                  height: "40px",
                                }}
                                options={groupclinicPortal}
                                showSearch
                                disabled
                                // disabled={!editUser.sites?.includes("2")}
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                              />
                              {errors.portalGroup && (
                                <p className="text-red-600 capitalize text-xs mt-1">
                                  {errors.portalGroup}
                                </p>
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {showFiledOnUsertype == "Corp Admin" ||
                          showFiledOnUsertype == "Corp Staff" ||
                          showFiledOnUsertype == "Corp Provider" ? (
                            <div className="selectdesabledprofile">
                              <label className="modal_label" htmlFor="corp_id">
                                Portal Corporations
                              </label>{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                              <Select
                                className="bg-white mt-2"
                                placeholder="Select Portal Corporations"
                                value={editUser.portalCorp || null}
                                name="corp_id"
                                // onChange={handleTypeEditportalcorp}
                                style={{
                                  width: "100%",
                                  height: "40px",
                                }}
                                options={corporationsPortal}
                                showSearch
                                disabled
                                // disabled={!editUser?.sites?.includes("2")}
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                              />
                              {errors.portalCorp && (
                                <p className="text-red-600 capitalize text-xs mt-1">
                                  {errors.portalCorp}
                                </p>
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {showFiledOnUsertype == "Practice Admin" ||
                          showFiledOnUsertype == "Practice Provider" ||
                          showFiledOnUsertype == "Practice Staff" ? (
                            <div className="selectdesabledprofile">
                              <label
                                className="modal_label"
                                htmlFor="practice_id"
                              >
                                Portal Practice
                              </label>{" "}
                              {/* <span className="text-red-600 ml-1">*</span> */}
                              <Select
                                className="bg-white mt-2"
                                placeholder="Select Portal Practice"
                                value={editUser.portalPractice || null}
                                name="practice_id"
                                // onChange={handleTypeEditportalpractice}
                                style={{
                                  width: "100%",
                                  height: "40px",
                                }}
                                options={practicePortal}
                                showSearch
                                disabled
                                // disabled={!editUser?.sites?.includes("2")}
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                              />
                              {errors.portalPractice && (
                                <p className="text-red-600 capitalize text-xs mt-1">
                                  {errors.portalPractice}
                                </p>
                              )}
                            </div>
                          ) : (
                            ""
                          )}

                          {/* {showFiledOnUsertype == "Entity Admin" ||
                    showFiledOnUsertype == "Entity Staff" ? (
                    <div className="">
                      <label className="modal_label" htmlFor="entity_id">
                        Portal Entity
                      </label>
                      <Select
                        className="bg-white mt-2"
                        placeholder="Select Portal Entities"
                          value={editUser.portalEntity || null}
                        name="entity_id"
                        onChange={handleTypeEditportalentity}
                        style={{
                          width: "100%",
                          height: "40px",
                        }}
                        options={entitiesPortal}
                        showSearch
                          disabled={!editUser?.sites?.includes("2")}
                        filterOption={(input, option) =>
                          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                        }
                      />

                    </div>
                  ) : (
                    ""
                  )} */}
                        </div>
                      </>
                    )}

                    <div class="flex justify-end mt-5">
                      {/* <div className="selectdesabledprofile flex gap-2  switchbutton">
                                            <label className="block  text-[15px] font-medium  text-gray-900 ">
                                                2FA
                                            </label>
                                            <Form.Item name="fieldA" valuePropName="checked">
                                            <Switch
                                                checked={formData.tofa == 1}
                                                className=""
                                                onChange={(checked) =>
                                                    setFormData({
                                                        ...formData,
                                                        tofa: checked ? "1" : "0",
                                                    })
                                                }
                                                checkedChildren="ON"
                                                unCheckedChildren="OFF"
                                            />
                                            </Form.Item>
                                        </div> */}
                      <button
                        onClick={(e) => handleEditSubmit(e)}
                        class="w-[94px] h-10  py-2 rounded-lg bg-blue-500 text-white text-sm font-semibold"
                      >
                        {loading ? (
                          <Image
                            src="/Loaders/wait5.gif"
                            className="mb-0 m-auto h-[22px]"
                            alt="Loading"
                            height={20}
                            width={20}
                            unoptimized
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default ProfileEdit;
