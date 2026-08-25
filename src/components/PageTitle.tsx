import { useEffect } from "react";

type PageTitleProps = {
  title: string;
};

// page title
const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default PageTitle;
