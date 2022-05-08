//react
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//redux
import {
  fetchOneCompanyData,
  pushEditCompany,
} from "../features/reducers/oneCompanySlice";
//style
import "../style/css/editCompany.css";
//mui
import {
  TextField,
  Button,
  MenuItem,
  IconButton,
  Select,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import Input from "@mui/material/Input";

import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EditCompany = () => {
  // useParams, useDispatch, useEffect
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneCompanyData({ id: id }));
  }, [dispatch]);
  const company = useSelector((state) => state.oneCompany.data);
  const looping = company.slice(0, 1).map((i) => {
    return i;
  });
  //initial state, new values container
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [rc_ice, setRc_ice] = useState("");
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [passwordTarget, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const password = passwordTarget.password;
  const [category, setCategory] = useState("");
  const goBoy = {
    userName,
    phoneNumber,
    email,
    status,
    address,
    avatar,
    rc_ice,
    companyName,
    password,
    category,
  };
  //handling changes
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(pushEditCompany({ goBoy, id: id }));
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleUsername = (event) => {
    setUserName(event.target.value);
    setEmail(event.target.value);
  };

  const handleChange = (prop) => (event) => {
    setPassword({ ...passwordTarget, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setPassword({
      ...passwordTarget,
      showPassword: !passwordTarget.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // image input
  const InputTwo = styled("input")({
    display: "none",
  });
  return (
    <div className="company">
      <div className="companyTitleContainer">
        <h1 className="userTitle">Edit company</h1>
      </div>
      {looping.map((com) => {
        return (
          <div key={com.id} className="companyContainer">
            <div className="personal_info">
              <div className="edit_company_container">
                <div className="image_upload">
                  <img
                    className="image_edit"
                    src="https://i.pinimg.com/564x/2b/77/f2/2b77f29da6e9732e801120bde508f340.jpg"
                    alt="no image"
                  />
                  <label htmlFor="contained-button-file">
                    <InputTwo
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button component="span">Upload new image</Button>
                  </label>
                </div>
                <div className="personal_info_part2">
                  <div className="personal_info_part2_1">
                    <div className="textField_div">
                      <TextField
                        label="Name"
                        defaultValue={com.companyName}
                        variant="standard"
                        onChange={(e) => setCompanyName(e.target.value)}
                      />

                      <TextField
                        label="RC ICE"
                        variant="standard"
                        defaultValue={com.rc_ice}
                        onChange={(e) => setRc_ice(e.target.value)}
                      />
                      <FormControl
                        fullWidth
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          status
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          defaultValue={com.status}
                          onChange={handleStatusChange}
                        >
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Disabled">Disabled</MenuItem>
                          <MenuItem value="Deleted">Deleted</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">
                          confirm Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={
                            passwordTarget.showPassword ? "text" : "password"
                          }
                          defaultValue={com.password}
                          onChange={handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {passwordTarget.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="personal_info_part2">
                  <div className="personal_info_part2_1">
                    <div className="textField_div">
                      <TextField
                        label="Email"
                        defaultValue={com.email}
                        variant="standard"
                        onChange={handleUsername}
                      />
                      <TextField
                        label="Phone Number"
                        variant="standard"
                        defaultValue={com.phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <FormControl
                        fullWidth
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Location
                        </InputLabel>
                        <Select
                          id="demo-simple-select-standard"
                          defaultValue={com.address}
                          onChange={handleAddressChange}
                        >
                          <MenuItem value="Casablanca">Casablanca</MenuItem>
                          <MenuItem value="Rabat">Rabat</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={
                            passwordTarget.showPassword ? "text" : "password"
                          }
                          defaultValue={com.password}
                          onChange={handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {passwordTarget.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button_update">
                <Button
                  onClick={handleUpdate}
                  variant="contained"
                  sx={{ width: "150px", backgroundColor: "#3f3d56" }}
                >
                  UPDATE
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditCompany;
