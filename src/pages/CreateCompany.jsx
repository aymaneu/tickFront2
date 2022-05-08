//react
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//redux

//style
import "../style/css/createCompany.css";
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
  FormHelperText,
  Input,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postNewCompany } from "../features/reducers/oneCompanySlice";

const CreateCompany = () => {
  // useParams, useDispatch, useEffect
  let { id } = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(postNewCompany({ id: id }));
  // }, [dispatch]);
  //initial state, new values container for company
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [rc_ice, setRc_ice] = useState("");
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [averageTime, setAverageTime] = useState("");
  const [passwordTarget, setPassword] = useState({
    password: "",
    showPassword: false,
  });
  const password = passwordTarget.password;

  const [category, setCategory] = useState("");
  //initial state, new values container for agency
  const [agencyName, setAgencyName] = useState("");
  const [agencyPhoneNumber, setAgencyPhoneNumber] = useState("");
  const [agencyEmail, setAgencyEmail] = useState("");
  const [agencyUserName, setAgencyUserName] = useState("");
  const [agencyPassword, setAgencyPassword] = useState({
    password: "",
    showPassword: false,
  });
  const AgencyPassword = agencyPassword.password;
  const [agencyAddress, setAgencyAddress] = useState("");

  const agencyNameCom = agencyName + " " + agencyAddress;
  const handleCoAgeName = (event) => {
    setAgencyName(event.target.value);
    setCompanyName(event.target.value);
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
  const handleAgencyUsername = (event) => {
    setAgencyUserName(event.target.value);
    setAgencyEmail(event.target.value);
  };
  const handleChange = (prop) => (event) => {
    setPassword({ ...passwordTarget, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setAgencyPassword({ ...passwordTarget, [prop]: event.target.value });
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
  const goBoy = {
    userName,
    AgencyPassword,
    agencyEmail,
    phoneNumber,
    agencyPhoneNumber,
    serviceDescription,
    email,
    status,
    address,
    avatar,
    rc_ice,
    companyName,
    password,
    category,
    serviceName,
    averageTime,
    agencyNameCom,
    agencyAddress,
    agencyUserName,
  };
  // handling changes
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(postNewCompany({ goBoy, id: 1 }));
  };
  return (
    <div className="company">
      <div className="companyTitleContainer">
        <h1 className="userTitle">Create company</h1>
      </div>

      <div className="companyContainer">
        <div className="personal_info">
          <h3>Personal information</h3>
          <div className="edit_company_container">
            <div className="image_upload">
              <img
                className="image_edit"
                src="https://i.pinimg.com/originals/a2/6c/61/a26c614b018999d42540df09dad3c65b.png"
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
                    variant="standard"
                    onChange={handleCoAgeName}
                  />

                  <TextField
                    label="RC ICE"
                    variant="standard"
                    onChange={(e) => setRc_ice(e.target.value)}
                  />

                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      type={passwordTarget.showPassword ? "text" : "password"}
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
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      category
                    </InputLabel>

                    <Select
                      defaultValue=""
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      onChange={handleCategoryChange}
                    >
                      <MenuItem value="Bank">Bank</MenuItem>
                      <MenuItem value="Bosta">Bosta</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="service name"
                    variant="standard"
                    onChange={(e) => setServiceName(e.target.value)}
                  />
                  <FormControl variant="standard" sx={{ m: 1, mt: 3 }}>
                    <Input
                      type="number"
                      id="standard-adornment-weight"
                      onChange={(e) => setAverageTime(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">min</InputAdornment>
                      }
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "average time",
                      }}
                    />
                    <FormHelperText id="standard-weight-helper-text">
                      average time for service
                    </FormHelperText>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="personal_info_part2">
              <div className="personal_info_part2_1">
                <div className="textField_div">
                  <TextField
                    label="Email"
                    variant="standard"
                    onChange={handleUsername}
                  />
                  <TextField
                    label="Phone Number"
                    variant="standard"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Input
                      type={passwordTarget.showPassword ? "text" : "password"}
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
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Location
                    </InputLabel>
                    <Select
                      defaultValue=""
                      id="demo-simple-select-standard"
                      onChange={handleAddressChange}
                    >
                      <MenuItem value="Casablanca">Casablanca</MenuItem>
                      <MenuItem value="Rabat">Rabat</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    onChange={(e) => setServiceDescription(e.target.value)}
                    id="standard-multiline-static"
                    label="service description"
                    multiline
                    rows={4}
                    variant="standard"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3>Add new Agency</h3>
          <div className="edit_company_container">
            <div className="image_upload">
              <img
                className="image_edit"
                src="https://i.pinimg.com/originals/a2/6c/61/a26c614b018999d42540df09dad3c65b.png"
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
                    label="Phone Number"
                    variant="standard"
                    onChange={(e) => setAgencyPhoneNumber(e.target.value)}
                  />
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Password
                    </InputLabel>
                    <Input
                      type={passwordTarget.showPassword ? "text" : "password"}
                      onChange={handleChange2("password")}
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
                  <FormControl
                    fullWidth
                    variant="standard"
                    sx={{ m: 1, minWidth: 120 }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Location
                    </InputLabel>
                    <Select
                      defaultValue=""
                      id="demo-simple-select-standard"
                      onChange={(e) => setAgencyAddress(e.target.value)}
                    >
                      <MenuItem value="Casablanca">Casablanca</MenuItem>
                      <MenuItem value="Rabat">Rabat</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="personal_info_part2">
              <div className="personal_info_part2_1">
                <div className="textField_div">
                  <TextField
                    label="Email"
                    variant="standard"
                    onChange={handleAgencyUsername}
                  />
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <Input
                      type={passwordTarget.showPassword ? "text" : "password"}
                      onChange={handleChange2("password")}
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
              onClick={handlePost}
              variant="contained"
              sx={{ width: "150px", backgroundColor: "#3f3d56" }}
            >
              CREATE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
