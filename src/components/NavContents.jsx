import React from 'react'
import { Motion, AnimatePresence } from 'framer-motion';
import { Button } from '@components/ui/button'; // I have installed shadcn/ui to be able to use the button component
import { Input} from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Textarea } from '@components/ui/textarea';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@components/ui/card';
import  {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@components/ui/select';
import { cn } from '@lib/utils';
import {
    Rocket,
    LayoutDashboard,
    Users,
    ShoppingCart,
    BookOpen,
    Mail,
    LogIn,
    UserPlus,
    CheckCircle,
    AlertTriangle,
    Loader2,
    ArrowRight,
    ArrowLeft,
    GripVertical,
    Zap,
    Briefcase,
    Globe,
    MessageSquare,
    Phone,
    HelpCircle
} from 'lucide-react';

// ==================
//   page Variants
// ===================
const pageVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeInOut'}},
    exit: {opacity: 0, y: -20, transition: {duration: 0.3, ease: 'easeInOut'}}
}

// ==================
// Sub-Components
// ===================
const FeatureCard = ({ title, description, icon, delay = 0 }) => (
    <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ delay }}
        className="p-6 rounded-lg bg-card border border-border shadow-md"
    >
        <div className="flex items-center gap-4 mb-4">
            {icon}
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
);
 

const NavContents = () => {
  return (
    <div></div>
  )
}

export default NavContents