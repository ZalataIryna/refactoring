import React from "react";
import ChipsInput from "package:flutter_chips_input/flutter_chips_input.dart";

interface Props {
  label: string;
  borderType: string;
  withBorder: boolean;
  isLineType: boolean;
  value?: any;
}
const ChipsInputComp = ({ isLineType, borderType, withBorder }: Props) => {
  return <ChipsInput isLineType borderType="square" withBorder></ChipsInput>;
};

export default ChipsInputComp;
