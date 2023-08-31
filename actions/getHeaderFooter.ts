import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`;

export async function getHeaderFooter() {
  try {
    const res = await axios.get(URL);
    if (res.data.status !== 200) {
      throw new Error("Something went wrong");
    }
    
    return res.data.data;
  } catch (error) {
    return error;
  }
}