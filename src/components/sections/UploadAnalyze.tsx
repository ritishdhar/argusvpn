"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, X, CheckCircle2, Loader2 } from 'lucide-react';
import Results from './Results';

const progressStates = [
  'Uploading file…',
  'Extracting frames…',
  'Processing appearance features (CLIP)…',
  'Detecting frequency artifacts (DCT)…',
  'Checking audio–visual sync (SyncNet)…',
  'Analyzing speech signals…',
  'Combining model outputs…',
  'Finalizing result…'
];

interface AnalysisResult {
  verdict: 'REAL' | 'FAKE' | 'UNCERTAIN';
  confidence: number;
  scores: {
    appearance: number;
    frequency: number;
    sync?: number;
    audio?: number;
  };
  metadata: {
    resolution: string;
    duration: string;
    fps: number;
    codec: string;
    audioPresent: boolean;
    compressionLevel: string;
    framesAnalyzed: number;
    audioSamplingRate?: number;
  };
  warnings: string[];
}

const UploadAnalyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isVideoWithAudio = file?.type.startsWith('video/');
  const isImageOnly = file?.type.startsWith('image/');
  const isAudioOnly = file?.type.startsWith('audio/');
  const analysisMode = isVideoWithAudio ? 'Full Analysis' : 'Fast Analysis';
  const analysisTime = isVideoWithAudio ? '10–15s' : '2–3s';

  const handleFileSelect = useCallback((selectedFile: File) => {
    const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
    const validExtensions = ['mp4', 'mov', 'webm', 'png', 'jpg', 'jpeg', 'wav'];
    
    if (fileExtension && validExtensions.includes(fileExtension)) {
      setFile(selectedFile);
      setResult(null);
    } else {
      alert('Please upload MP4, MOV, WebM, PNG/JPG, or WAV files only.');
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  }, [handleFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  }, [handleFileSelect]);

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setCurrentProgress(0);
    setCompletedSteps([]);
    setCurrentStep(0);
    setResult(null);

    // Determine which steps to show based on file type
    const stepsToShow = isVideoWithAudio 
      ? progressStates.length 
      : isImageOnly 
        ? 4 // Skip sync and audio steps for images
        : 6; // Skip sync for audio-only

    // Simulate analysis progress
    for (let i = 0; i < stepsToShow; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCompletedSteps(prev => [...prev, i]);
      setCurrentProgress(((i + 1) / stepsToShow) * 100);
    }

    // Generate mock result
    const mockResult: AnalysisResult = {
      verdict: Math.random() > 0.5 ? 'REAL' : Math.random() > 0.5 ? 'FAKE' : 'UNCERTAIN',
      confidence: Math.floor(Math.random() * 30) + 70,
      scores: {
        appearance: Math.floor(Math.random() * 40) + 60,
        frequency: Math.floor(Math.random() * 40) + 60,
        ...(isVideoWithAudio && {
          sync: Math.floor(Math.random() * 40) + 60,
          audio: Math.floor(Math.random() * 40) + 60,
        }),
      },
      metadata: {
        resolution: '1920x1080',
        duration: '00:00:15',
        fps: 30,
        codec: 'H.264',
        audioPresent: isVideoWithAudio || isAudioOnly,
        compressionLevel: 'Medium',
        framesAnalyzed: 450,
        ...(isVideoWithAudio || isAudioOnly && {
          audioSamplingRate: 44100,
        }),
      },
      warnings: [],
    };

    setIsAnalyzing(false);
    setResult(mockResult);

    // Auto-scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setCurrentProgress(0);
    setCompletedSteps([]);
    setCurrentStep(0);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNewAnalysis = () => {
    setResult(null);
    setFile(null);
    setCurrentProgress(0);
    setCompletedSteps([]);
    setCurrentStep(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    document.getElementById('upload-analyze')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getFilePreview = () => {
    if (!file) return null;
    
    if (file.type.startsWith('image/')) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="w-full h-48 object-cover rounded-lg"
        />
      );
    }
    
    if (file.type.startsWith('video/')) {
      return (
        <video
          src={URL.createObjectURL(file)}
          className="w-full h-48 object-cover rounded-lg"
          controls={false}
        />
      );
    }
    
    return (
      <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-4xl">🎵</span>
      </div>
    );
  };

  const getStepsToShow = () => {
    if (isImageOnly) {
      return progressStates.slice(0, 4);
    }
    if (isAudioOnly) {
      return progressStates.filter((_, i) => i !== 4); // Skip SyncNet
    }
    return progressStates;
  };

  return (
    <>
      <section id="upload-analyze" className="bg-card section-reveal py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
              Analyze Your Media
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Upload a video, image, or audio file and let Truthlens AI examine it using our multimodal detection pipeline.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
              We analyze appearance features, frequency artifacts, lip-sync accuracy, and audio authenticity to determine if the content is real or manipulated.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Upload Area */}
            {!file && (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                  border-2 border-dashed rounded-xl p-16 text-center transition-all duration-300 cursor-pointer
                  ${isDragging 
                    ? 'border-primary bg-primary/10' 
                    : 'border-border hover:border-primary/50 hover:bg-accent/5'
                  }
                `}
              >
                <Upload className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
                <p className="text-xl font-medium mb-2">
                  {isDragging ? 'Drop your file here' : 'Drag & drop your file here'}
                </p>
                <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                <p className="text-xs text-muted-foreground/70">
                  MP4, MOV, WebM, JPG, PNG, WAV
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*,image/*,audio/wav,audio/wave"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
            )}

            {/* File Preview */}
            {file && !isAnalyzing && (
              <div className="border border-border rounded-xl p-6 bg-background space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0">
                      {getFilePreview()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile();
                    }}
                    className="rounded-full flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Analysis Mode Labels */}
                <div className="flex gap-2 justify-center">
                  <Badge variant="outline" className="rounded-full">
                    {analysisMode}: {analysisTime}
                  </Badge>
                </div>

                <Button
                  onClick={handleAnalyze}
                  className="w-full rounded-full font-bold"
                  size="lg"
                >
                  Start Analysis
                </Button>
              </div>
            )}

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="border border-border rounded-xl p-6 bg-background">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-muted-foreground">Analysis Progress</p>
                    <p className="text-sm font-medium">{Math.round(currentProgress)}%</p>
                  </div>
                  <Progress value={currentProgress} className="h-2" />
                </div>

                {/* Progress Checklist */}
                <div className="space-y-3 mb-6">
                  {getStepsToShow().map((state, index) => {
                    const isCompleted = completedSteps.includes(index);
                    const isCurrent = currentStep === index && !isCompleted;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 transition-all ${
                          isCompleted ? 'text-green-500' : isCurrent ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        ) : isCurrent ? (
                          <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin" />
                        ) : (
                          <div className="w-5 h-5 flex-shrink-0 rounded-full border-2 border-current" />
                        )}
                        <p className="text-sm">{state}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <p>Truthlens AI is analyzing your content…</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section - Only visible after analysis */}
      {result && <Results result={result} onNewAnalysis={handleNewAnalysis} />}
    </>
  );
};

export default UploadAnalyze;
