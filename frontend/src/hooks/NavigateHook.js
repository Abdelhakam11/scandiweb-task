import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useNavigateTo(path) {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate(path);
  }, [navigate, path]);

  return navigateTo;
}
