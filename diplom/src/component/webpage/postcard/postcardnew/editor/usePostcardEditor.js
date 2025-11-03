import { useRef, useState, useCallback, useEffect } from "react";
import { useHistory } from "../utils/useHistory";
import { ORIENTATIONS, INITIAL_STAMP, INITIAL_TEXT } from "../utils/constant";
import rawData from "../data/stamp.json";

// Defensive check for data structure
const validateData = (data) => ({
  stamps: data.stamps || [],
  stickers: data.stickers || [],
  templatesLandscape: data.templatesLandscape || [],
  templatesPortrait: data.templatesPortrait || [],
  fonts: data.fonts || [],
});

export const usePostcardEditor = () => {
  const [zIndexCounter, setZIndexCounter] = useState(1);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const data = validateData(rawData);

  const initialState = {
    activeSide: "back",
    orientation: ORIENTATIONS.LANDSCAPE,
    selectedTemplate: null,
    stickers: [],
    textElements: [],
    stamp: { ...INITIAL_STAMP },
    isPreviewing: false,
    selectedElement: null,
    activeTool: "select",
    fontFamily: null,
    borderStyle: "10px solid #8a3225",
    isLoading: true,
  };

  const {
    state: historyState,
    setState: setHistoryState,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useHistory({
    stickers: [],
    textElements: [],
    stamp: { ...initialState.stamp },
  });

  const [state, setState] = useState(initialState);

  // ✅ Font loading using FontFace API
  const loadFont = (font) => {
    if (font?.url) {
      const fontFace = new FontFace(font.id, `url(${font.url})`);
      fontFace
        .load()
        .then((loaded) => {
          document.fonts.add(loaded);
          console.log("✅ Font loaded:", loaded.family);
        })
        .catch((err) => {
          console.warn("❌ Font load failed:", err);
        });
    }
  };

  // ✅ State updater + font loader
  const updateState = useCallback(
    (newState) => {
      setState((prev) => ({ ...prev, ...newState }));

      // If font changed, load it
      if (newState.fontFamily) loadFont(newState.fontFamily);

      // Update history
      setHistoryState({
        stickers: newState.stickers || state.stickers,
        textElements: newState.textElements || state.textElements,
        stamp: newState.stamp || state.stamp,
      });
    },
    [state.stickers, state.textElements, state.stamp, setHistoryState]
  );

  // ✅ Initial setup
  useEffect(() => {
    const templates = data.templatesLandscape;
    if (templates.length > 0) {
      updateState({
        selectedTemplate: templates[0],
        stamp: { ...INITIAL_STAMP, src: data.stamps[0] || "" },
        fontFamily: data.fonts[0],
        isLoading: false,
      });
    } else {
      console.error("❌ No templates found");
      updateState({ isLoading: false });
    }
  }, []);

  // ✅ Handlers
  const handleOrientationChange = (newOrientation) => {
    const templates =
      newOrientation === "landscape"
        ? data.templatesLandscape
        : data.templatesPortrait;

    updateState({
      orientation: newOrientation,
      selectedTemplate: templates[0] || null,
      stamp: {
        ...state.stamp,
        x: newOrientation === "landscape" ? 500 : 300,
      },
    });
  };

  const handleTemplateChange = (src) => updateState({ selectedTemplate: src });

  const handleStampChange = (src) =>
    updateState({ stamp: { ...state.stamp, src } });

  const handleStampUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateState({ stamp: { ...state.stamp, src: reader.result } });
    };
    reader.readAsDataURL(file);
  };

  const addSticker = (stickerMeta) => {
    const newSticker = {
      id: `sticker-${Date.now()}`,
      x: 100,
      y: 100,
      size: 80,
      rotation: 0,
      type: "image",
      src: stickerMeta.src,
      zIndex: zIndexCounter,
    };
    const newState = {
      ...state,
      stickers: [...state.stickers, newSticker],
      selectedElement: newSticker.id,
    };
    setState(newState);
    setZIndexCounter((prev) => prev + 1);
    setHistoryState({
      stickers: newState.stickers,
      textElements: newState.textElements,
      stamp: newState.stamp,
    });
  };

  const addTextElement = () => {
    const newText = {
      id: `text-${Date.now()}`,
      ...INITIAL_TEXT,
      fontFamily: state.fontFamily?.name || "Cursive",
      zIndex: zIndexCounter,
    };
    updateState({
      textElements: [...state.textElements, newText],
      selectedElement: newText.id,
    });
    setZIndexCounter((prev) => prev + 1);
  };

  const updateTextElement = (id, updates) => {
    const updated = state.textElements.map((el) =>
      el.id === id ? { ...el, ...updates } : el
    );
    updateState({ textElements: updated });
  };

  const deleteElement = (id) => {
    updateState({
      stickers: state.stickers.filter((s) => s.id !== id),
      textElements: state.textElements.filter((t) => t.id !== id),
      selectedElement: null,
    });
  };

  const handleCanvasClick = (e) => {
    if (e.target === e.currentTarget) {
      updateState({ selectedElement: null });
    }
  };

  const handleKeyDown = (e) => {
    const isEditingText = document.activeElement?.tagName === "TEXTAREA";
    if (
      !isEditingText &&
      state.selectedElement &&
      (e.key === "Delete" || e.key === "Backspace")
    ) {
      e.preventDefault();
      deleteElement(state.selectedElement);
    }
  };

  return {
    state,
    handlers: {
      handleOrientationChange,
      handleTemplateChange,
      handleStampChange,
      handleStampUpload,
      addSticker,
      addTextElement,
      updateTextElement,
      deleteElement,
      handleCanvasClick,
      handleKeyDown,
      undo,
      redo,
    },
    refs: { frontRef, backRef },
    data,
    isLoading: state.isLoading,
    canUndo,
    canRedo,
    updateState,
  };
};
