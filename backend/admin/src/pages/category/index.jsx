import {
    Box,
    useTheme,
    useMediaQuery,
    Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import Form from '../../FormHandler/Form';
import { useEffect, useState } from "react";
import ModeIcon from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export function customRowIndexColumn() {
    return ({
        name: 'S.No',
        options: {
            filter: false,
            customBodyRender: (value, meta) => {
                return (
                    meta.rowIndex + 1
                );
            }
        }
    })
}

function Category(){

    const form = new Form();
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
        console.log(id);
    }

    const columns = [
        customRowIndexColumn(),
        "name",
        "image", 
        {
            name: "Actions",
            options: {
              filter: false,
              sort: false,
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                    <>
                        {/*
                            Edit button
                        */}
                        <Link to={`/edit/category/${data[dataIndex]._id}`}>
                            <Button aria-label="edit" variant="contained" color="secondary">
                                <ModeIcon />
                            </Button>
                        </Link>

                        {/*
                            Delete button
                        */}
                        <Button aria-label="edit" sx={{ ml: 2 }} variant="contained" color="error" onClick={() => handleDelete(data[dataIndex]._id)}>
                            <DeleteForeverIcon />
                        </Button>
                    </>
                );
             }
          },
        }
    ];

    const options = {
        filterType: 'checkbox',
      };

    const categories = async() => {
        await form.get('/api/category/list')
                .then(response => {
                    setData(response);
                })
                .catch(error => {
                    console.log(error);
                });
    }

    useEffect(() => {
        categories();
    }, []);


    return (
        <Box m="20">
            <Box
                display={smScreen ? "flex" : "block"}
                flexDirection={smScreen ? "row" : "column"}
                justifyContent={smScreen ? "space-between" : "start"}
                alignItems={smScreen ? "center" : "start"}
                m="10px 18px"
            >

                <Link 
                    to="/add-category"
                    padding="10px 20px"
                    style={{
                        textDecoration: 'none',
                        color: "#fff",
                        background : "#00440ad1",
                        padding: '10px 18px'
                    }}
                >
                    Add Category
                </Link>
            </Box>
            <Box  m="10px 18px">
                <MUIDataTable
                    title={"Category List"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Box>

        </Box>
    );


}

export default Category;