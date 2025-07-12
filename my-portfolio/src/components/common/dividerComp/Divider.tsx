interface DividerProps {
    className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
    return (
        <div
            className={`w-full h-px bg-muted-foreground/30 ${className}`}
        />
    );
};

export { Divider };
