import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Svg,
  G,
  Path,
  ClipPath,
  Rect,
  Defs,
  Font,
  Image as PDFImage,
  Image,
} from "@react-pdf/renderer";
import type { MemberTransaction } from "@/types/admin/member";
import { formatToCurrency } from "@/libs/format-to-currency";
import LogoFlexSvg1 from "@/components/ui/Icons/logo-flex-svg";
import LogoFlexSvg2 from "../../../../../public/images/site/Logo-Flex.svg";

Font.registerHyphenationCallback((word) => ["", word]);

// Font.register({
//   family: "Roboto Mono",
//   fonts: [
//     {
//       src: require("@/components/ui/Font/Roboto_Mono/RobotoMono-Light.ttf"),
//     },
//     {
//       src: require("@/components/ui/Font/Roboto_Mono/RobotoMono-Bold.ttf"),
//       fontWeight: "bold",
//     },
//   ],
// });

const COL1_WIDTH = 40;
const COLN_WIDTH = 100 / 2;

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    // padding: 32,
    // color: "#3B3E66",
    // fontFamily: "Arial",
    // fontSize: 7,
    // paddingTop: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    // paddingLeft: 4,
    // paddingTop: 16,
    // fontFamily: "Roboto Mono",
    // fontSize: 5,
  },
  body: {
    // paddingTop: 24,
    // paddingBottom: 48,
    // padding: 16,
    paddingRight: 16,
    // paddingLeft: 4,
    // fontFamily: "Roboto Mono",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // fontSize: 6,
  },
  textSizeDefault: {
    fontSize: 10,
    fontWeight: "normal",
  },
  textSizeLg: {
    fontSize: 13,
  },
  textBold: {
    fontWeight: "bold",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  table: {
    // display: 'table',
    width: "auto",
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderBottomColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderBottomColor: "#000",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    marginTop: 5,
    fontSize: 10,
  },
  image: {
    width: 50, // Set your desired width
    height: 50, // Set your desired height
  },
});

const defData = {
  id: 0,
  member: {
    name: "",
    phone: "",
    email: "",
  },
  package: {
    id: 0,
    name: "",
    price: 0,
    category_id: 0,
  },
  admin_fee: 0,
  approval_photo: "",
  member_until: "",
  createdAt: "",
  payment_type_admin: 0,
  notanumber: {
    code: "",
    amount: -1,
  },
};
const customPageSize = { width: 145, height: "auto" };
const InvoiceHeader = ({ data = defData }) => (
  <View style={styles.header}>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        borderStyle: "dashed",
        paddingBottom: 16,
        paddingTop: 0,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PDFImage
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAC4jAAAuIwF4pT92AABdjElEQVR4Xu3dB3hUVfr48fSekAYJAQUpSgdFOqgUKYIUpSpYQYrKiuLq2ta67toXxYa6Yu+KDRGUDiJSBOmI9J6E9J7835Mfk/9k5k5mJrkzc2fmm+fhETPnnnPu54y+954aEMAPAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAgMcEAj1WMgXrLlBSXhRxuvhoW90z9kyGFQ4Wa57O9HfT97oiPCgqKzEs5S8H86oxWXF5UWR68dFWZomc+e/HmbR6VJc8PC9QU5s7+v02z8N0jfqn+lP5WUhgWEH98EY7PH+71MDTAiGergDl6yewOXvFlG9OvPG85BisX65O52Tvf1Ran2sFZa2Czf/npv5u+qOVtiwwIDDjusb3j5cP6xzQS8tLwt45/K+v9hdsv+ysr3nZ9u7ZaUQu+L9g5cYfR8qz1c61bX9719n7jiuekh4JV7wk/7zTjVYUZVABArpBG6Y21dqavfoaDwdzVW17/2O093ltbl3rmuCu8YPeax7d/mc9Mlxy+qPHJZgPtJGXu+5Jj1shj9oL2Gpnj7W/PLSWd6l3+au1vyWu9CWBIF+6GX++l1NFh9scKNh5sT8bmN97/bBGGwbWv+Y+PTy2ZK8avzbzuzv0yIs8ENBToENcn4+Sw9N265kneXmvAAHde9uuWs1XZCx4oCKggh4XUQkKDM65KvW2KaFB4YV1bd4dOetHfHH85XliG1rXvLgeAT0FZOw8q3/yuAf0zJO8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kg0CCCCAAAIOCRDQHWKyn2hv3u8DSytKysY1nDUpJOj/n5Zl/0pSIIAAAgggUHcBAnrdDStz2Ji19OZLk66aGx9Wv8bTvHQqjmwQQAABBBCoJkBA1+ELkVeanZRVejq6e/yQOTpkRxYIIIAAAggg4AmBDWd+nphefEzzTGlP1IcyEUAAAQQQQKAWAqeKjrSsxWVcggACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCLhK4P8BXY2Eq8c/84EAAAAASUVORK5CYII="
          }
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          FLEX GYM AND CAFE
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          Ngebel, Tamantirto, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa
          Yogyakarta 55184
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Text style={{ fontSize: 7, textAlign: "center" }}>
          No. Nota : {data?.notanumber?.code} {data?.notanumber?.amount}
        </Text>
      </View>
    </View>
  </View>
);

const InvoiceBody = ({ data = defData }) => (
  <View style={styles.body}>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        borderStyle: "dashed",
        fontSize: 7,
        paddingBottom: 8,
        paddingTop: 8,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Nama Member</Text>
        <Text>{data?.member?.name || "-"}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Email</Text>
        <Text>{data?.member?.email || "-"}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>No. Handphone</Text>
        <Text>{data?.member?.phone || "-"}</Text>
      </View>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        borderStyle: "dashed",
        fontSize: 7,
        paddingBottom: 8,
        paddingTop: 8,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>Perpanjang Member</Text>
          <Text>{data?.package?.name || "-"}</Text>
        </View>
        <Text>{formatToCurrency(data?.package?.price ?? 0, true) || "-"}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text>Biaya Admin</Text>
        <Text>{formatToCurrency(data?.admin_fee ?? 0, true) || "-"}</Text>
      </View>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        borderStyle: "dashed",
        fontSize: 7,
        paddingBottom: 8,
        paddingTop: 8,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text>Subtotal</Text>
        <Text>
          {formatToCurrency(
            data?.admin_fee + data?.package?.price ?? 0,
            true
          ) || "-"}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text>Total</Text>
        <Text>
          {formatToCurrency(
            data?.admin_fee + data?.package?.price ?? 0,
            true
          ) || "-"}
        </Text>
      </View>
    </View>

    {/* <View style={{ display: "flex", flexDirection: "column"}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}}>
          <Text>Subtotal</Text>
          <Text>{data?.price}</Text>
      </View><View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text>Total</Text>
          <Text>{data?.admin_fee}</Text>
      </View>
    </View> */}

    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: 8,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 6, textAlign: "center" }}>
          Terima kasih karena telah percaya Flex Gym and Cafe sebagai tempat
          fitness kamu. Salam sehat!
        </Text>
      </View>
    </View>
  </View>
);

const InvoiceDoc = ({ invoiceData = defData }) => {
  return (
    <Document>
      <Page style={styles.page} size={customPageSize}>
        <View>
          <InvoiceHeader data={invoiceData} />
          <InvoiceBody data={invoiceData} />
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDoc;
