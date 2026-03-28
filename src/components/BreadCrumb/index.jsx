import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const CustomBreadcrumbs = ({ items = [] }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return isLast ? (
                    <Typography key={index} sx={{ color: "black" }}>
                        {item.label}
                    </Typography>
                ) : (
                    <Link
                        key={index}
                        underline="hover"
                        sx={{
                            color: "inherit",
                            textDecoration: "none",
                            "&:hover": {
                                color: "#ff5252",
                            },
                        }}
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default CustomBreadcrumbs;