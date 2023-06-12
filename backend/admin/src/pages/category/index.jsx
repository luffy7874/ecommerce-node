import {
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import Form from '../../FormHandler/Form';
import { useEffect, useState } from "react";
import ModeIcon from '@mui/icons-material/Mode';

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

    const columns = [
        customRowIndexColumn(),
        "name",
        "image", 
        {
            name: "Delete",
            options: {
              filter: true,
              sort: false,
              empty: true,
              customBodyRender: (value, tableMeta, updateValue) => {
                return (
                  <button onClick={() => {
                    const { data } = this.state;
                    data.shift();
                    this.setState({ data });
                  }}>
                    Delete
                  </button>
                );
              }
            }
          },
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