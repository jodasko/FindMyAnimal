import { useState } from "react";
import { ResultData } from "../models/Animals.model";

export const useResultsState = () => {
  const [data, setData] = useState<ResultData[]>([]);
  const [selectedResult, setSelectedResult] = useState<ResultData | null>(null);

  return { data, setData, selectedResult, setSelectedResult };
};
