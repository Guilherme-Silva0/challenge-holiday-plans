import clsx from "clsx";

type Props = {
  size?: "small" | "medium" | "large";
  color?: "black" | "white";
};

export function Loader({ size = "medium", color = "black" }: Props) {
  return (
    <div
      className={clsx(
        "border-2 border-t-transparent rounded-full animate-spin",
        {
          "w-6 h-6": size === "small",
          "w-8 h-8": size === "medium",
          "w-10 h-10": size === "large",
          "border-black": color === "black",
          "border-white": color === "white",
        },
      )}
    ></div>
  );
}
