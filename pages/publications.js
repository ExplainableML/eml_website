import NavBar from "../components/NavBar";
import YearHeadline from "../components/YearHeadline"

export default function Publications() {
  return (
    <div class="bg-gray-100">
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <YearHeadline text="2021"></YearHeadline>
          <YearHeadline text="2020"></YearHeadline>
          <YearHeadline text="2019"></YearHeadline>
      </div>
    </div>
  );
}
