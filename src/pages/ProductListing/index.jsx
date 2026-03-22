import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Sidebar from '../../components/Sidebar'


const ProductListing = () => {
  return (
    <section className="py-8">
      <div className="container flex gap-3">

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
        </Breadcrumbs>

        <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default ProductListing