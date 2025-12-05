import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "hero", ...props }, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                className={cn("font-bold tracking-wide", className)}
                {...props}
            />
        );
    }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
