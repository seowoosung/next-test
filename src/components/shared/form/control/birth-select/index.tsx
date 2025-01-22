import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { Select, SelectProps } from "antd";
import { useEffect, useState } from "react";

const CLimitAge = 14;
interface IBirthdateSelectProps extends SelectProps {
  initialValue?: string;
}
export const BirthdateSelect = ({ onChange, initialValue }: IBirthdateSelectProps) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(() => {
    if (initialValue) {
      const splitDate = initialValue.split("-");
      return parseInt(splitDate[0]);
    }
    return currentYear - CLimitAge;
  });
  const [month, setMonth] = useState<number>(() => {
    if (initialValue) {
      const splitDate = initialValue.split("-");
      return parseInt(splitDate[1]);
    }
    return 1;
  });
  const [day, setDay] = useState<number>(() => {
    if (initialValue) {
      const splitDate = initialValue.split("-");
      return parseInt(splitDate[2]);
    }
    return 1;
  });

  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    onChange?.(`${year}-${month}-${day}`, []);
  }, [year, month, day]);

  return (
    <FlexRowWrapper>
      <Select
        placeholder="연도"
        onChange={(value) => setYear(value)}
        size="large"
        value={year}
        style={{ marginRight: "10px" }}
      >
        {years.map((year) => (
          <Select.Option key={year} value={year}>
            {year}
          </Select.Option>
        ))}
      </Select>
      <Select placeholder="월" value={month} onChange={(value) => setMonth(value)} size="large">
        {months.map((month) => (
          <Select.Option key={month} value={month}>
            {month}
          </Select.Option>
        ))}
      </Select>
      <Select
        placeholder="일"
        onChange={(value) => setDay(value)}
        value={day}
        size="large"
        style={{ marginLeft: "10px" }}
      >
        {days.map((day) => (
          <Select.Option key={day} value={day}>
            {day}
          </Select.Option>
        ))}
      </Select>
    </FlexRowWrapper>
  );
};
