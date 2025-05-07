"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, title }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>
        <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">
            Demo video coming soon! We&apos;re currently recording an amazing
            product walkthrough.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
