const AuthLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className='h-full flex items-center justify-center 
            bg-[radial-gradient(ellipse_at_top,_#f5f5f5,_#d4d4d4)]'>
            {children}
        </div>
    );
};

export default AuthLayout;